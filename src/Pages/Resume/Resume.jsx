import React from 'react'
import { FaBlackTie } from 'react-icons/fa'
import Header from '../../Components/Header/Header'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { data } from './utils'
import 'react-vertical-timeline-component/style.min.css'
import { MdWork } from 'react-icons/md'

function Resume() {
  return (
    <section className="resume" id="resume">
      <Header headerText="My Resume" icon ={<FaBlackTie size={40}/>}/>
      <div className="timeline">

        <div className="timeline-exp">
          <h3 className='header-text'>Experience</h3>
          <VerticalTimeline
            layout={'1-column'}
            lineColor='#ffdd40'
          >
            {data.experience.map((item,i)=> (
               <VerticalTimelineElement key={i} className='vertical-timeline-ele' contentStyle={{
                background: 'none',
                color: '#ffffff',
                border: '1.5px solid #ffdd40'
               }} date='2020 - Persent' icon={<MdWork/>} iconStyle={{
                background:'#181818',
                color: '#ffdd40',
               }}>
               
                <div className="vertical-timeline-ele-title-wrapper">
                  <h3 className='vertical-timeline-ele-title'>{item.title}</h3>
                  <h4 className='vertical-timeline-ele-subtitle'>{item.subTitle}</h4>
                </div>
                <p className='dec'>{item.description}</p>

               </VerticalTimelineElement>
            ))}

          </VerticalTimeline>
        </div>

        <div className="timeline-edu">
          <h3 className='header-text'>Education</h3>
          <VerticalTimeline
            layout={'1-column'}
            lineColor='#ffdd40'
          >
            {data.education.map((item,i)=> (
               <VerticalTimelineElement key={i} className='vertical-timeline-ele' contentStyle={{
                background: 'none',
                color: '#ffffff',
                border: '1.5px solid #ffdd40'
               }}  icon={<MdWork/>} iconStyle={{
                background:'#181818',
                color: '#ffdd40',
               }}>
               
                <div className="vertical-timeline-ele-title-wrapper">
                  <h3 className='vertical-timeline-ele-title'>{item.title}</h3>
                  <h4 className='vertical-timeline-ele-subtitle'>{item.subTitle}</h4>
                </div>
                <p className='dec'>{item.description}</p>
                 <span className='vertical-timeline-element-date'>{item.date}</span>
          

               </VerticalTimelineElement>
            ))}

          </VerticalTimeline>
        </div>

      </div>
    </section>
  )
}

export default Resume
