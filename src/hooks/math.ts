const generateRectangleMeta = (startPos: [number, number], w: number, h: number) =>{
    //防御性编程，防止参数传错了导致整个系统崩溃
    if(startPos&&Array.isArray(startPos)&&startPos.length == 2&& typeof w==='number'&&typeof h==='number' ){
        const [a0,b0]=startPos;
        const a1=a0+w;
        const b1=b0+h;
        return{
            startPos,
            endPos:[a1,b1],
            pos:[
                [a0,b0],
                [a1,b0],
                [a1,b1],
                [a0,b1]
            ],
            w,
            h
        }
    }else{
        throw new Error('"Please pass in the correct parameters"')
    }
}

const generateCircleMeta = (pos: [number, number], r: number) =>{
    return{
        startPos:[pos[0]-r,pos[1]-r],
        pos,
        r
      
    }
}

const generateLineMeta =(startPos:[number,number],endPos:[number,number])=>{
    return {
        startPos,
        endPos
    }
}
export {
    generateRectangleMeta,
    generateCircleMeta,
    generateLineMeta
}
