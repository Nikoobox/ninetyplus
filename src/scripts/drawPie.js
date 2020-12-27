const drawPie = (vote1, vote2) => {

    const dims = {height:300, width:300, radius:150};
    const cent = {x: (dims.width / 2 + 5), y: (dims.height  /2 + 5)};

    const svg = d3.select('#pie-box')
        .append('svg')
        .attr('width', dims.width + 50)
        .attr('height', dims.height + 50)

    const graph = svg.append('g')
        .attr('transform', `translate(${cent.x}, ${cent.y})`)

    const pie = d3.pie()
        .sort(null)
        .value(d => d.value);

    const arcPath = d3.arc()
        .outerRadius(dims.radius)
        .innerRadius(dims.radius/1.5)
    
    const color = d3.scaleOrdinal(['#f5b7cd', '#0D0D0E'])

    const update = (data) => {

        color.domain(['team1', 'team2'])
        const paths = graph.selectAll('path')
            .data(pie(data));

        paths.exit().remove();
        paths.attr('d', arcPath);

        paths.enter()
            .append('path')
                .attr('class', 'arc')
                .attr('stroke', '#fff')
                .attr('stroke-width', 2)
                .attr('fill', d=>color(d.data.data.name))
                .transition().duration(1500) 
                    .attrTween('d', arcTweenEnter);
    };

    const data = pie([
        { name: 'team2', value: vote2 },
        { name: 'team1', value: vote1 }
    ])

    
    const arcTweenEnter = (d) => {
        let i = d3.interpolate(d.endAngle, d.startAngle);
        return function(t){
            d.startAngle = i(t);
            return arcPath(d);
        }
    };
    update(data);
}

export default drawPie;