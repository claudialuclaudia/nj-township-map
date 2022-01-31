import './App.css';
import React from 'react';
import * as d3 from 'd3';

class NJMap extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.dataset = [100, 200, 300, 400, 500];
  }

  componentDidMount() {
    // console.log(this.myRef);
    // d3.select(this.myRef.current)
    //   .append("p")
    //   .text("Hello from D3");
    let size = 500;
    let svg = d3.select(this.myRef.current)
      .append('svg')
      .attr('width', size)
      .attr('height', size);

    let rect_width = 95;
    svg.selectAll("rect")
      .data(this.dataset)
      .enter()
      .append("rect")
      .attr('x', (d, i) => 5 + i * (rect_width + 5))
      .attr('y', d => size - d)
      .attr("width", rect_width)
      .attr("height", d => d)
      .attr('fill', "teal");
  }

  render() {
    return (
      <div ref={this.myRef}>
      </div>
    );
    // return (
    // <nav className="map">
    //   <div className="container">
    //   <map name="primary">
    //     <area shape="circle" alt="newton" coords="309,140,5" href="https://www.google.com/search?q=newton&oq=newton&aqs=chrome..69i64j69i57.4517j0j4&sourceid=chrome&ie=UTF-8"></area>
    //     <area shape="circle" alt="paterson" coords="473,189,5" href="https://www.google.com/search?q=paterson&oq=paterson&aqs=chrome..69i64j69i57.2324j0j3&sourceid=chrome&ie=UTF-8"></area>
    //     <area shape="circle" alt="hackensack" coords="510,199,5" href="https://www.google.com/search?q=hackensack&oq=hackensack&aqs=chrome..69i64j69i57.2310j0j3&sourceid=chrome&ie=UTF-8"></area>
    //     <area shape="circle" alt="belvidere" coords="219,218,5" href="https://www.google.com/search?q=belvidere&oq=belvidere&aqs=chrome..69i64j69i57.2310j0j3&sourceid=chrome&ie=UTF-8"></area>
    //     <area shape="circle" alt="morristown" coords="386,230,5" href="https://www.google.com/search?q=morristown&oq=morristown&aqs=chrome..69i64j69i57.2310j0j3&sourceid=chrome&ie=UTF-8"></area>
    //     <area shape="circle" alt="newark" coords="473,250,5" href="https://www.google.com/search?q=newark&oq=newark&aqs=chrome..69i64j69i57.2310j0j3&sourceid=chrome&ie=UTF-8"></area>
    //     <area shape="circle" alt="elizabeth" coords="459,272,5" href="https://www.google.com/search?q=elizabeth&oq=elizabeth&aqs=chrome..69i64j69i57.2310j0j3&sourceid=chrome&ie=UTF-8"></area>
    //     <area shape="circle" alt="jerseycity" coords="501,252,5" href="https://www.google.com/search?q=jerseycity&oq=jerseycity&aqs=chrome..69i64j69i57.2310j0j3&sourceid=chrome&ie=UTF-8"></area>
    //     <area shape="circle" alt="flemington" coords="280,526,5" href="https://www.google.com/search?q=flemington&oq=flemington&aqs=chrome..69i64j69i57.2310j0j3&sourceid=chrome&ie=UTF-8"></area>
    //     <area shape="circle" alt="somerville" coords="349,503,5" href="https://www.google.com/search?q=somerville&oq=somerville&aqs=chrome..69i64j69i57.2310j0j3&sourceid=chrome&ie=UTF-8"></area>
    //     <area shape="circle" alt="newbrunswick" coords="394,535,5" href="https://www.google.com/search?q=newbrunswick&oq=newbrunswick&aqs=chrome..69i64j69i57.2310j0j3&sourceid=chrome&ie=UTF-8"></area>
    //     <area shape="circle" alt="trenton" coords="313,424,5" href="https://www.google.com/search?q=trenton&oq=trenton&aqs=chrome..69i64j69i57.2310j0j3&sourceid=chrome&ie=UTF-8"></area>
    //     <area shape="circle" alt="freehold" coords="444,410,5" href="https://www.google.com/search?q=freehold&oq=freehold&aqs=chrome..69i64j69i57.2310j0j3&sourceid=chrome&ie=UTF-8"></area>
    //     <area shape="circle" alt="mountholly" coords="299,500,5" href="https://www.google.com/search?q=mountholly&oq=mountholly&aqs=chrome..69i64j69i57.2310j0j3&sourceid=chrome&ie=UTF-8"></area>
    //     <area shape="circle" alt="tomsriver" coords="465,514,5" href="https://www.google.com/search?q=tomsriver&oq=tomsriver&aqs=chrome..69i64j69i57.2310j0j3&sourceid=chrome&ie=UTF-8"></area>
    //     <area shape="circle" alt="camden" coords="207,522,5" href="https://www.google.com/search?q=camden&oq=camden&aqs=chrome..69i64j69i57.2310j0j3&sourceid=chrome&ie=UTF-8"></area>
    //     <area shape="circle" alt="woodbury" coords="197,551,5" href="https://www.google.com/search?q=woodbury&oq=woodbury&aqs=chrome..69i64j69i57.2310j0j3&sourceid=chrome&ie=UTF-8"></area>
    //     <area shape="circle" alt="salem" coords="108,643,5" href="https://www.google.com/search?q=salem&oq=salem&aqs=chrome..69i64j69i57.2310j0j3&sourceid=chrome&ie=UTF-8"></area>
    //     <area shape="circle" alt="maryslanding" coords="315,682,5" href="https://www.google.com/search?q=maryslanding&oq=maryslanding&aqs=chrome..69i64j69i57.2310j0j3&sourceid=chrome&ie=UTF-8"></area>
    //     <area shape="circle" alt="bridgeton" coords="173,691,5" href="https://www.google.com/search?q=bridgeton&oq=bridgeton&aqs=chrome..69i64j69i57.2310j0j3&sourceid=chrome&ie=UTF-8"></area>
    //     <area shape="circle" alt="capemay" coords="288,808,5" href="https://www.google.com/search?q=capemay&oq=capemay&aqs=chrome..69i64j69i57.2310j0j3&sourceid=chrome&ie=UTF-8"></area>

    //   </map>
    // <img usemap="#primary" src="https://www.worldatlas.com/r/w1200/upload/c0/78/96/new-jersey-counties-map.png" height='937px' width='660px'></img>

    //   </div>
    // </nav>
    // );
  }
}

export default NJMap;