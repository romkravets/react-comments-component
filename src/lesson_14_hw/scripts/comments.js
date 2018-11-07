import { HTTPService } from './http-service';

const BTN_DEL_CLASS_NAME = 'btn_del';
const LIST_ITEM_TEMPLATE = `<div class="list_item" id={{id}}>
<img class="list__img" src="https://gravatar.com/avatar/412c0b0ec99008245d902e6ed0b264ee?s=80"> 
<div class="list__text">{{title}}</div>
<button type="button" class="${BTN_DEL_CLASS_NAME}">DELETE</button>
</div>`
const URL = 'http://localhost:4001/list';
const  TASK_ID_PREFIX = 'taskId';

export  class CommentsList {
    constructor(rootElement) {
        this.rootElement = rootElement;
        this.httpService = new HTTPService;
        this.render();
        this.getList();
    }

    getList() {
        this.httpService.get(URL, (response) => this.renderLists(response));
    }

    render() {
        this.title = document.createElement('h3');
        this.title.classList.add('h3');
        this.title.textContent = 'Comments';
        this.rootElement.appendChild(this.title);

        this.form = document.createElement('form');
        this.form.classList.add('comments__form');
        this.input = document.createElement('textarea');
        this.input.classList.add('comments__textarea');
        this.input.setAttribute("placeholder", "Add comment...");

        this.submitBtn = document.createElement('button');
        this.submitBtn.classList.add('comments__button');


        this.submitBtn.textContent = 'Add Comment';

        this.form.appendChild(this.input);
        this.form.appendChild(this.submitBtn);
        this.form.addEventListener('submit', (e) => this.onSubmit(e));

        this.rootElement.appendChild(this.form);
    }

    onSubmit (e) {
        e.preventDefault();
        const title = this.input.value;
        this.input.value = "";
        this.httpService.post(URL, {title}, (task) => {
            this.renderOne(task);
        });
    }
    

    deleteItem(taskId) {
        this.httpService.delete(`${URL}/${taskId}`, () => {
            const elementForRemove = this.list.querySelector(`#${TASK_ID_PREFIX + taskId}`);
            this.list.removeChild(elementForRemove);
        });
    }

    renderOne(task) {
        const divItem = LIST_ITEM_TEMPLATE.replace('{{id}}', TASK_ID_PREFIX + task.id).replace('{{title}}', task.title);
        this.list.innerHTML = this.list.innerHTML + divItem;
    }

    renderLists(tasks) {
        this.list = document.createElement('div');
        this.list.classList.add('list');

        tasks.forEach((task) => this.renderOne(task));

        this.list.addEventListener('click', (e) => {
            if(e.target.classList.contains(BTN_DEL_CLASS_NAME)) {
                e.stopPropagation();
                const id = e.target.closest('div').getAttribute('id').replace(TASK_ID_PREFIX, '');
                this.deleteItem(id);
            }
        })
        this.rootElement.appendChild(this.list);
    }

}