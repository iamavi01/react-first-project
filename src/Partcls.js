import React from 'react'
import Particles from 'react-particles-js'
import "./particle.css"
function Partcls(){
    return(
        <Particles
      params={{
        particles: {
          number: {
            value: 200,
            density: {
              enable: true,
              value_area: 10900,
            }
          },
        },
      }}
      />
    )
}
export default Partcls;