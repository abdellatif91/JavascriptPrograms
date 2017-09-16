function Vertex(name) {
    this.name = name;
}​

function Graph() {
    this.vertices = {}; //Map of vertices name and index
    this.AM = []; //Adjency Matrix
    ​
    this.addVertex = function(Vertex) {
        if (!this.vertices[Vertex.name]) {
            this.vertices[Vertex.name] = this.AM.length;​
            for (var i = 0; i <= this.AM.length; i++) {
                if (i == this.AM.length && this.AM[0]) {
                    let numberOfElementInEachRow = this.AM[0].length;
                    this.AM.push([...Array(numberOfElementInEachRow)].map(() => 0));
                    break;
                } else {
                    if (this.AM[0]) {
                        this.AM[i].push(0);
                    } else {
                        this.AM.push([0]);
                        break;
                    }
                }
            }

            console.log(this.AM.length);
        }
    }

    this.addEdge = function(Edge) {
        var vertex1 = Edge[0];
        var vertex2 = Edge[1];
        if (this.vertices[vertex1] !== undefined && this.vertices[vertex2] != undefined) {
            this.AM[this.vertices[vertex1]][this.vertices[vertex2]] = 1;
        }
    }​
    this.displayGraph = function() {
        console.log('   ' + Object.keys(this.vertices).join('  '));
        for (var i = 0; i < this.AM.length; i++) {
            console.log(Object.keys(this.vertices)[i] + '   ' + this.AM[i].join('  '));
        }
    }
}​

var a = new Vertex('A');
var b = new Vertex('B');
var c = new Vertex('C');​
var graph = new Graph();​
graph.addVertex(a);
graph.addVertex(b);
graph.addVertex(b);
graph.addVertex(c);
graph.addEdge("AB");
graph.addEdge("CA");
graph.addEdge("DE");
graph.displayGraph();
