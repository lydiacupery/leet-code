export class Solution {

public static findShortest(graphNodes: number, graphFrom: number[], graphTo: number[], ids: number[], val: number) {

        // make adj map
        const adjMap = new Map<number, number[]>();
        const colorToNode = new Map<number, number[]>();
        const nodeToColor = new Map<number,number>()

        graphFrom.forEach((_, i) => {
                const from = graphFrom[i]
                const to = graphTo[i]
                // either append or adjust the to
                adjMap.set(from, adjMap.get(from) ? [...adjMap.get(from)!, to] : [to])
                adjMap.set(to, adjMap.get(to) ? [...adjMap.get(to)!, from] : [from])
        })


        // make node to color map and color to node map
        Array.from({length: graphNodes}).forEach((_, i) => {
                console.log("i", i)
                nodeToColor.set(i+1, ids[i])
                colorToNode.set(ids[i], colorToNode.get(ids[i]) ? [...colorToNode.get(ids[i])!, i+1] : [i+1])
        })


        let depth = 1
        
        // get all nodes adj to color nodes
        const startingNodes = colorToNode.get(val)!
        if(!startingNodes) {
                return -1
        }
       
        const mapsAndQueues = startingNodes.map(sn => {
                const visited = new Map()
                visited.set(sn, true)
                console.log("visited!", visited)
                const toReturn = ({ adj: adjMap.get(sn), visited: visited })
                console.log({toReturn})
                return toReturn;
        })
        console.log({mapsAndQueues: JSON.stringify(mapsAndQueues, null, 2)})

        if(!mapsAndQueues.every(m => !m.adj || m.adj!.length === 0)){ // if all of them are either undefined or have a length of 0, can stop :)
                depth = depth + 1
                console.log("depth is...", depth)
                for(const [i] of mapsAndQueues.entries()){
                        const currAdjs = mapsAndQueues[i].adj
                        const len = currAdjs ? currAdjs!.length : 0
                        const newQ: number[] = []
                        for(let j = 0; j < len; j++){
                                if (nodeToColor.get(currAdjs![i]) === val) {
                                        return depth
                                }
                                else if(adjMap.get(currAdjs![i])){
                                        adjMap.get(currAdjs![i])!.map(n =>newQ.push(n))

                                }
                        }
                        console.log("--- new q", newQ)
                        mapsAndQueues[i].adj = newQ
                }
                console.log({mapsAndQueues: JSON.stringify(mapsAndQueues, null, 2)})
                console.log("boolean", !mapsAndQueues.every(m => !m.adj || m.adj!.length === 0))
        }


        return -1

}

}
