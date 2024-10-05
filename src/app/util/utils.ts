import * as d3 from 'd3';

export default class Utils {
    static drawCourt(svg: any, width: number, height: number) {
        console.log('drawing')
        svg.selectAll("*").remove()
        let xFeet = d3.scaleLinear()
            .domain([-25,25])
            .range([0,width])
    
        let yFeet = d3.scaleLinear()
            .domain([-47,47])
            .range([height,0])
    
        //Backboard
        svg.append('line')
            .attr('x1', xFeet(-3))
            .attr('x2', xFeet(3))
            .attr('y1', yFeet(-43))
            .attr('y2', yFeet(-43))
            .attr('stroke', 'black')
    
        svg.append('line')
            .attr('x1', xFeet(-3))
            .attr('x2', xFeet(3))
            .attr('y1', yFeet(43))
            .attr('y2', yFeet(43))
            .attr('stroke', 'black')
    
        // Center Circle
        svg.append('circle')
            .attr("cx", xFeet(0))
            .attr('cy', yFeet(0))
            .attr('r', xFeet(-19))
            .attr('fill-opacity', 0)
            .attr('stroke', 'black')
    
        //Free throw circle
    
        svg.append('path')
            .attr('d', `M ${xFeet(-6)} ${yFeet(-28)} A 1 1 0 0 1 ${xFeet(6)} ${yFeet(-28)}`)
            .attr('stroke', 'black')
            .attr('fill-opacity', 0)
    
        svg.append('path')
            .attr('d', `M ${xFeet(-6)} ${yFeet(-28)} A 1 1 0 0 0 ${xFeet(6)} ${yFeet(-28)}`)
            .attr('stroke', 'black')
            .attr('stroke-dasharray',xFeet(-24))
            .attr('fill-opacity', 0)
    
        svg.append('path')
            .attr('d', `M ${xFeet(-6)} ${yFeet(28)} A 1 1 0 0 0 ${xFeet(6)} ${yFeet(28)}`)
            .attr('stroke', 'black')
            .attr('fill-opacity', 0)
    
        svg.append('path')
            .attr('d', `M ${xFeet(-6)} ${yFeet(28)} A 1 1 0 0 1 ${xFeet(6)} ${yFeet(28)}`)
            .attr('stroke', 'black')
            .attr('stroke-dasharray',xFeet(-24))
            .attr('fill-opacity', 0)
    
        // Inner Paint lines
        svg.append('line')
            .attr('x1', xFeet(-8))
            .attr('x2', xFeet(-8))
            .attr('y1', yFeet(-47))
            .attr('y2', yFeet(-28))
            .attr('stroke', 'black')
    
        svg.append('line')
            .attr('x1', xFeet(8))
            .attr('x2', xFeet(8))
            .attr('y1', yFeet(-47))
            .attr('y2', yFeet(-28))
            .attr('stroke', 'black')
    
        svg.append('line')
            .attr('x1', xFeet(-8))
            .attr('x2', xFeet(8))
            .attr('y1', yFeet(-28))
            .attr('y2', yFeet(-28))
            .attr('stroke', 'black')
    
        svg.append('line')
            .attr('x1', xFeet(-8))
            .attr('x2', xFeet(-8))
            .attr('y1', yFeet(47))
            .attr('y2', yFeet(28))
            .attr('stroke', 'black')
    
        svg.append('line')
            .attr('x1', xFeet(8))
            .attr('x2', xFeet(8))
            .attr('y1', yFeet(47))
            .attr('y2', yFeet(28))
            .attr('stroke', 'black')
    
        svg.append('line')
            .attr('x1', xFeet(-8))
            .attr('x2', xFeet(8))
            .attr('y1', yFeet(28))
            .attr('y2', yFeet(28))
            .attr('stroke', 'black')
    
        // 3 point lines
    
        svg.append('line')
            .attr('x1', xFeet(-22))
            .attr('x2', xFeet(-22))
            .attr('y1', yFeet(-47))
            .attr('y2', yFeet(-33))
            .attr('stroke', 'black')
    
        svg.append('line')
            .attr('x1', xFeet(22))
            .attr('x2', xFeet(22))
            .attr('y1', yFeet(-47))
            .attr('y2', yFeet(-33))
            .attr('stroke', 'black')
    
        svg.append('path')
            .attr('d', `M ${xFeet(-22)} ${yFeet(-33)} A 237 237 0 0 1 ${xFeet(22)} ${yFeet(-33)}`)
            .attr('stroke', 'black')
            .attr('fill-opacity', 0)
    
        svg.append('line')
            .attr('x1', xFeet(-22))
            .attr('x2', xFeet(-22))
            .attr('y1', yFeet(47))
            .attr('y2', yFeet(33))
            .attr('stroke', 'black')
    
        svg.append('line')
            .attr('x1', xFeet(22))
            .attr('x2', xFeet(22))
            .attr('y1', yFeet(47))
            .attr('y2', yFeet(33))
            .attr('stroke', 'black')
    
        svg.append('path')
            .attr('d', `M ${xFeet(-22)} ${yFeet(33)} A 237 237 0 0 0 ${xFeet(22)} ${yFeet(33)}`)
            .attr('stroke', 'black')
            .attr('fill-opacity', 0)
    
        //Mid court line
    
        svg.append('line')
            .attr('x1', xFeet(-25))
            .attr('x1', xFeet(25))
            .attr('y1', yFeet(0))
            .attr('y2', yFeet(0))
            .attr('stroke','black')
    }
}