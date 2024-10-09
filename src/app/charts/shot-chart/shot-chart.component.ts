import { Component, Input, OnChanges, OnInit } from '@angular/core';
import * as d3 from 'd3';
import Utils from '../../util/utils';
import { PlayerDataService } from '../../services/player-data.service';

@Component({
  selector: 'app-shot-chart',
  standalone: true,
  imports: [],
  templateUrl: './shot-chart.component.html',
  styleUrl: './shot-chart.component.scss'
})
export class ShotChartComponent implements OnInit, OnChanges {
    @Input() playerId: string;
    svg: any;
    width = 500
    height = 940;

    constructor(private playerDataAPI: PlayerDataService) {

    }

    ngOnInit() {
        this.resetChart();
    }

    ngOnChanges() {
        this.resetChart();
    }

    resetChart() {
        this.svg = d3.select('#shot-chart')
        this.svg.attr("height", '70vh')
        .attr("viewBox", "0 0 " + this.width + " " + this.height)
        .attr("perserveAspectRatio", "xMinYMid")
        .style("border", "1px solid black")
        Utils.drawCourt(this.svg, this.width, this.height);
        if (this.playerId == undefined) this.drawShots([]);
        else this.playerDataAPI.getShotData(this.playerId, '2023-24').subscribe( res => {
            this.drawShots(res['Shot_Chart_Detail'] as []);
        })
    }

    drawShots(data: []) {
        let x = d3.scaleLinear()
            .domain([-250, 250])
            .range([ 0, this.width ]);
    
        let y = d3.scaleLinear()
            .domain([-50, 890])
            .range([this.height, 0]);
    
        var shape = d3.scaleOrdinal([1,0], [d3.symbolCircle, d3.symbolX])
    
        if (data.length === 0) {
            this.svg.selectAll("*").remove()
            this.svg.append('text')
                .attr('x', '50%')
                .attr('y', '50%')
                .attr('dominant-baseline','middle')
                .attr('text-anchor', 'middle')
                .text("No shot data")
        } else {
            this.svg.append('g')
                .selectAll("dot")
                .data(data)
                .enter()
                .append("path")
                .attr("transform", d => `translate(${x(-d.LOC_X)}, ${y(d.LOC_Y)})`)
                .attr('class', 'shotTaken')
                .attr("stroke", d => d.SHOT_MADE_FLAG ? "#00FF00" : "#FF0000")
                .attr("stroke-width", 3)
                .attr('d', d3.symbol().size(50).type(d => shape(d.SHOT_MADE_FLAG)))
                .style("fill", d => d.SHOT_MADE_FLAG ? "#00AA00" : "#FF0000")
                .attr('fill-opacity', 0.25)
                .style('cursor', 'pointer')
                .on("click", (e,d) => {
                    this.playerDataAPI.getVideoEvent(d.GAME_ID, d.GAME_EVENT_ID).subscribe( res => {
                        if (res['resultSets']["Meta"]["videoUrls"][0]["lurl"] === null) alert('No video found')
                        else window.open(res['resultSets']["Meta"]["videoUrls"][0]["lurl"], '_blank')
                    })
                })
                .on('mouseover', (e,d) => {
                    d3.selectAll('.shotTaken')
                        .transition()
                        .attr('stroke-opacity', 0.25)
                    d3.select(e.target)
                        .transition()
                        .attr('d', d3.symbol().size(100).type(d => shape(d.SHOT_MADE_FLAG)))
                        .attr('stroke-opacity', 1.0)
                })
                .on('mouseleave', (e,d) => {
                    d3.selectAll('.shotTaken')
                        .transition()
                        .attr('stroke-opacity', 1.0)
                        .attr('d', d3.symbol().size(50).type(d => shape(d.SHOT_MADE_FLAG)))
                })
        }
    }

}
