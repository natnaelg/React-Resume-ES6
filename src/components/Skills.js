import React from 'react';
import SkillItem from './SkillItem';

const Skills = props => {
	const getSkills = () => {
		const skillItems = [];
		props.skillsData.forEach((val, index) => {
			skillItems.push(<SkillItem data={val} />);
		})
		return skillItems;
	};

	return (
			<section className="skills">
				{getSkills()}
			</section>
	);
};

export default Skills;
