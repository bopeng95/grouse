import * as d3 from 'd3';
export default function drawBarGraph(width, height, data) {
    const svg = d3.select('.graph')
        .append('svg')
        .attr('id', 'chart')
        .attr('width', width)
        .attr('height', height);
    const margin = {
        top: 60,
        bottom: 100,
        left: 80,
        right: 40
    };
    const chart = svg.append('g')
        .classed('display', true)
        .attr('transform', `translate(${margin.left},${margin.top})`);
    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;
    plot(chart, chartWidth, chartHeight, data, 'tag', 'value');
}
function plot(chart, width, height, data, tech, val) {
    const xScale = d3.scaleBand()
        .domain(data.map(d => d[tech]))
        .range([0, width]);
    const yScale = d3.scaleLinear()
        .domain([0, getHighestValue(data)])
        .range([height, 0]);
    const colorScale = d3.scaleOrdinal(d3.schemeCategory10);

    chart.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", d => xScale(d[tech]))
        .attr("y", d => yScale(d[val]))
        .attr("width", d => xScale.bandwidth()-10)
        .attr("height", d => (height - yScale(d[val])))
        .style('fill', (d, i) => colorScale(i));
    chart.selectAll('.bar-label')
        .data(data)
        .enter()
        .append('text')
        .classed('bar-label', true)
        .attr('x', d => xScale(d[tech]) + xScale.bandwidth()/2)
        .attr('dx', 0)
        .attr('y', d => yScale(d[val]))
        .attr('dy', -6)
        .text(d => d[val]);
    const xAxis = d3.axisBottom()
                    .scale(xScale);
    chart.append('g')
        .classed('x axis', true)
        .attr('transform', `translate(0,${height})`)
        .call(xAxis);
    const yAxis = d3.axisLeft()
                    .ticks(5)
                    .scale(yScale);
    chart.append('g')
        .classed('y axis', true)
        .attr('transform', 'translate(0,0)')
        .call(yAxis);

    chart.select('.x.axis')
        .append('text')
        .attr('x',  width/2)
        .attr('y', 60)
        .attr('fill', '#000')
        .style('font-size', '20px')
        .style('text-anchor', 'middle')
        .text('Technologies');    
    chart.select('.y.axis')
        .append('text')
        .attr('x', 0)
        .attr('y', 0)
        .attr('transform', `translate(-50, ${height/2}) rotate(-90)`)
        .attr('fill', '#000')
        .style('font-size', '20px')
        .style('text-anchor', 'middle')
        .text('Number of Grouses');
}

function getHighestValue(data) {
    return data.reduce((acc, i) => {
        return acc = Math.max(acc, i.value);
    }, 0)
}