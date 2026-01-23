import { useEffect, useState } from 'react'
import './Skills.css'
import axios from 'axios'

function Skills() {
  const [skills, setSkills] = useState([])
  const [skillType, setSkillType] = useState([])

  useEffect(() => {
    axios
      .get('php/getData.php')
      .then((response) => {
        setSkills(response.data.skill)
        setSkillType(response.data.typeSkill)
      })
      .catch((e) => console.error('Chyba při načítání dat:', e))
  }, [])

  return (
    <div className="skills" id="skills">
      <h2>Dovednosti</h2>
      <div className="skills_groups">
        {skillType.map((type) => {
          const { id, type_name } = type
          return (
            <fieldset key={id} className="skills_group">
              <legend className="skills_group_legend">{type_name}</legend>
              {skills
                .filter((oneskill) => {
                  return oneskill.type_name === type_name
                })
                .map((oneskill) => {
                  const { id, image_name, description } = oneskill
                  return (
                    <div key={id} className="skills_one_tech">
                      <img src={`images/${image_name}`} alt={description} />
                      <p>{description.replace(/ /g, '\u00a0')}</p>
                    </div>
                  )
                })}
            </fieldset>
          )
        })}
      </div>
    </div>
  )
}

export default Skills
