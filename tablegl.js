'use strict';
class TableGl {
    constructor(parent) {
        this.parent = parent;
        this.pixels = [];
        this.fillNode(parent);
    }

    fillNode(node) {
        let table = document.createElement('table');
        table.className = 'table_gl_body';
        table.id = 'table_gl';
        let height = node.clientHeight;
        let width = node.clientWidth;
        for(let y = 0; y < height; y++) {
            let tr = document.createElement('tr');
            this.pixels.push([]);
            for(let x = 0; x < width; x++) {
                let td = document.createElement('td');
                this.pixels[y].push(td)
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        
        node.appendChild(table);
    }
}

function start(parent) {
    return new TableGl(parent)
}