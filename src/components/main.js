import React from 'react';

class Main extends React.Component{
	constructor(props){
		super(props);
		this.state ={
			links: ["https://github.com//ankanbal", "https://bitbucket.org/ankanb49/", "https://about.me/ankanb49", "https://www.linkedin.com/in/ankan-bal-929a80141/"],
			items: ["Projects", "Anime", "Experience", "Games", "Drawings"]
		}
	}
	render(){
		return(
			<div>
				<h1>My portfolio blog</h1>
				<h2>Introduction</h2>
				<h2>Relevant Links</h2>
				<ul>
					<li><a href={this.state.links[0]}>GitHub</a></li>
					<li><a href={this.state.links[1]}>BitBucket</a></li>
					<li><a href={this.state.links[2]}>About me</a></li>
					<li><a href={this.state.links[3]}>Linkedin</a></li>
				</ul>
			</div>
			);
	}
}

export default Main;