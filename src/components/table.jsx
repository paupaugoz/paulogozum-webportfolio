import React, { Component } from 'react'
import './aboutme.css';

class Table extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         skills: [
            { skill: <span className="red bold">Web Design</span>, Learning: '', Working: '', Advanced: '' },
            { skill: 'Figma' , Learning: '', Working: <span className="dot"></span>, Advanced: '' },
            { skill: 'Sketch', Learning: '', Working: <span className="dot"></span>, Advanced: '' },
            { skill: 'Photoshop', Learning: '', Working: <span className="dot"></span>, Advanced: '' },
            { skill: <span className="red bold">Web Technologies</span>, Learning: '', Working: '', Advanced: '' },
            { skill: 'React.js', Learning: '', Working: <span className="dot"></span>, Advanced: '' },
            { skill: 'HTML5', Learning: '', Working: '', Advanced: <span className="red-dot"></span> },
            { skill: 'CSS3', Learning: '', Working: '', Advanced: <span className="red-dot"></span> },
            { skill: 'Bootstrap', Learning: '', Working: '', Advanced: <span className="red-dot"></span> },
            { skill: 'JavaScript', Learning: '', Working: <span className="dot"></span>, Advanced: '' },
            { skill: 'SASS (SCSS)', Learning: '', Working: <span className="dot"></span>, Advanced: '' },
            { skill: 'Handlebars.js', Learning: '', Working: <span className="dot"></span>, Advanced: '' },
            { skill: 'Ruby-on-Rails', Learning: '', Working: <span className="dot"></span>, Advanced: '' },
            { skill: 'MySQL', Learning: '', Working: <span className="dot"></span>, Advanced: '' },
            { skill: 'MongoDB', Learning: '', Working: <span className="dot"></span>, Advanced: '' },
            { skill: 'PHP', Learning: <span className="green-dot"></span>, Working: '', Advanced: '' },
            { skill: 'C++/C#', Learning: '', Working: <span className="dot"></span>, Advanced: '' },
            { skill: 'Python', Learning: '', Working: '', Advanced: '' },
            { skill: <span className="red bold">Software Development/ <br/>Deployment Tools</span>, Learning: '', Working: '', Advanced: '' },
            { skill: 'Git (version control tools)', Learning: '', Working: '', Advanced: <span className="red-dot"></span> },
            { skill: 'Jira', Learning: <span className="green-dot"></span>, Working: '', Advanced: '' },
            { skill: 'Mocha', Learning: '', Working: '', Advanced: '' },
            { skill: 'NPM', Learning: '', Working: <span className="dot"></span>, Advanced: '' },
            { skill: 'AWS', Learning: <span className="green-dot"></span>, Working: '', Advanced: '' }
         ]
      }
   }

   renderSkillsTableHeader() {
      let skillsHeader = Object.keys(this.state.skills[0])
      return skillsHeader.map((key, index) => {
         return <th key={index}>{key.toUpperCase()}</th>
      })
   }

   renderSkillsTableData() {
      return this.state.skills.map((skills, index) => {
         const { skill , Learning, Working, Advanced} = skills
         return (
            <tr key={skill}>
               <td>{skill}</td>
               <td>{Learning}</td>
               <td>{Working}</td>
               <td>{Advanced}</td>
            </tr>
         )
      })
   }

   render() {
      return (
         <div id="skills-table-container">
            <h1 className='skills-title'>What I Use</h1>
            <table className='skills-table'>
               <tbody>
                  <tr className="">{this.renderSkillsTableHeader()}</tr>
                  {this.renderSkillsTableData()}
               </tbody>
            </table>
         </div>
      )
   }
}


export default Table;