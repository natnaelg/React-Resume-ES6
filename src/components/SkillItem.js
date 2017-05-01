import React from 'react';
import moment from 'moment';

const SkillItem = props => {
    const getSkills = props.data.keywords.map(function(item, index) {
      return (<li key={index}><span className="label label-success">{item}</span></li>)
    });

  	return (
		<div>
        	<h2 className="text-uppercase"><i className="fa fa-lg fa-code"></i>{props.data.name}</h2>
        	<ul className="skills-list list-inline">{getSkills}</ul>
		</div>
  	)
};

export default SkillItem;
