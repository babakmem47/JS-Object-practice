
///// Object :

const Node = {
    data: "ip",
    children : {
        left : 1,
        right: 2
    },
    getParent : function() {
        return "this will return parents of this node...";
    }
}

console.log(Node.getParent());


///// Factory function :

function createNode(data) {
    return {
        data,
        children : {
            left : Node,
            right : Node
        },
        getParent() {                // this is the Method of object
            return "this will return parents of this node...";
        }
    };
}

let node = createNode("one");    //  == console.log(node);
