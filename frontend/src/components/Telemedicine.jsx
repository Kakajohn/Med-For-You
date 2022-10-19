import React from 'react'

const Telemedicine = () => {
  return (
    <>
      <h1 className='text-center'>Let's take a look at what telemedicine is.</h1>
        <div className="col-8">
            <h2 className='text-center'>What is distance medical care?</h2>
              <p id='' >
                What is distance medical care? (telemedicine) Telemedicine or telemedicine is the dissemination of
                information and services related to health through electronic information and telecommunications
                technologies. It allows the care, advice, reminders, training, intervention, monitoring and remote
                admission of patients and clinics over long distances. Of course, achieving remote medical care requires
                a strong, reliable as well as broadband connection and at least 4th generation (4G) or long-term (LTE)
                broadband mobile technology. In order to overcome issues with video lecture stability and bandwidth
                limitation. But as the broadband infrastructure has improved, the use of telemedicine is becoming more
                widely available. Telemedicine, in short, is the provision of medical services remotely through the use
                of telecommunications.But to do this requires electronic transfer of medical data. Such medical data may
                be: 
                {/* <button id='read' onClick={showmore} ref={ref}>Read more<i class="fa-duotone fa-square-chevron-down"></i></button>
                <button id='less' onClick={showless} ref={ref}>Read less <i class="fa-duotone fa-square-chevron-down"></i></button> */}
                </p> <p id='more'></p><p id='more2'></p>
              {/* {click && ( */}
                 <span id='more'>
              <ul>
                <li>
                  • Biomarkers (electric and not), ie in vivo measurements:It is now possible to transmit any in vivo
                  signal, as they take the form of multi-channel one-dimensional recordings with sampling requirements
                  to which the existing telecommunications infrastructure can quite easily meet. Typical examples of
                  such signals are the signals that monitor vital functions of the human body such as
                  Electrocardiograms, Temperature measurements, Blood pressure, Respiration rate. <br />
                </li>

                <li>
                  • Laboratory tests, ie in vitro measurements: Hematological, Cytological, Microbiological
                  <br />
                </li>

                <li>
                  • Two-dimensional 2D or 3D images produced by imaging devices: X-rays, CT and MRI scans, Ultrasound,
                  Vascular charts, Microscope images.
                  <br />
                </li>

                <li>
                  • Medical file data of the examinee: Personal information, History of diseases, Past analyzes and
                  examinations. Along with the medical data itself, one-way or two-way and accompanying data, ie voice
                  (audio) and animation (video) can be sent. Remote monitoring, also known as self-monitoring, allows
                  doctors to monitor a patient remotely using various technological Appliances.This method is used to
                  monitor chronic diseases, such as heart disease,diabetes mellitus or asthma.These services can provide
                  comparable health outcomes in traditional patient patient meetings, provide greater patient
                  satisfaction and be more economical.
                </li>
              </ul>
              <p>
                Telemedicine is sometimes used as a synonym or in a more limited sense to describe remote clinical
                services, such as diagnosis and monitoring. When rural areas, lack of transportation, lack of mobility,
                reduced funding or lack of staff restrict access to care, then teleotherapy can bridge the gap. So can
                it offer provider (doctor) training, meetings, supervision and presentations between professionals?
                Telemedicine could includes two doctors discussing a case via video conference,a robotic surgery via
                remote access or physiotherapy via digital monitoring instruments. All these tests should be forwarded
                to a senior specialist for monitoring. In order to evaluate information through the continuous flow of
                information for the proper creation of the platform for communication between the participants.{' '}
              </p></span>
              {/* )} */}
            </div>
            <div className="col-8">
          <h1 className='text-center  pt-2 pb-3'>Why we need telemedicine?.</h1>
            <p>
                      The need for distance medical care The main needs covered by telemedicine applications are summarized
                      below:
                    </p>
                    <ul>
                      <li>• Remote areas with low quality medical services</li>
                      <li>• Navigation</li>
                      <li>• Home care</li>
                      <li>• Emergencies</li>
                      <li> • Health tourism units</li>
                      <li>• Counseling units for doctors</li>
                      <li>• Distance education</li>
                      <li>• Coverage of rare specialties</li>
                    </ul>
                    <ul>
                      {' '}
                      Homogenization of medical services The question that needs to be investigated is whether "is there
                      really a need for Telemedicine services"? There are many, many times different views. But let's look at
                      some features that will make it easier for us to form our own point of view: To the question which
                      factors indicate the development of Telemedicine services we will mention the following:
                      <li>• Equality of access</li>
                      <li>• The quality of services</li>
                      <li>• The improvement of the clinical result.</li>
                      <li>• Demographic changes</li>
                      In addition, it is observed that not all citizens have equal rights to medical care and its services.
                      Services such as: health education, sports, culture, economic nature as, leisure, information,
                      information. The reasons for this are different and vary, ie they are geographical, economic, teachers.
                      We conclude that inequalities can be large and often impossible.
                    </ul>
            </div>
    </>
  )
}

export default Telemedicine