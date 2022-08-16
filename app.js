const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstar)
item.addEventListener('dragend', dragend)

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', dragdrop)   
}

function dragstar(event) {

 event.target.classList.add('hold')
 setTimeout(() => event.target.classList.add('hide'), 0)


}

function dragend(event) {

    event.target.className = 'item'

}
function dragover(event) {
    console.log('drag over')
}
function dragenter(event) {
    console.log('drag enter')
}
function dragleave(event) {
    console.log('drag leave')
}
function dragdrop(event) {
    console.log('drag drop')
}