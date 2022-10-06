import React from 'react';
import '../sass/components/_top_button.scss';
import '../sass/components/_navbar.css';
import { Link, useNavigate } from 'react-router-dom';
const HomePage = () => {
  return (
    <>
      {/* <header>
        <nav>
          <div class='menu-icon'>
            <i class='fa fa-bars fa-2x'></i>
          </div>
          <div class='logo'></div>
          <div class='menu'>
            <ul>
              <li>
                <Link to={'/'}>Home</Link>
              </li>
              <li>
                <Link to='/med4u/articles'> Articles</Link>
              </li>
              <li>
                <Link to='/med4u/chat'>Chat</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header> */}
      <main>
        <div>
          <section id='medcare'>
            <div className='container'>
              <div className=''>
                <div className='card-body'>
                  <h1>Let's take a look at what telemedicine is.</h1>
                  <h2 style={{ textAlign: 'center' }}>What is distance medical care?</h2>

                  <p className='text-justify'>
                    What is distance medical care? (telemedicine) Telemedicine or telemedicine is the dissemination of
                    information and services related to health through electronic information and telecommunications
                    technologies. It allows the care, advice, reminders, training, intervention, monitoring and remote
                    admission of patients and clinics over long distances. Of course, achieving remote medical care
                    requires a strong, reliable as well as broadband connection and at least 4th generation (4G) or
                    long-term (LTE) broadband mobile technology. In order to overcome issues with video lecture
                    stability and bandwidth limitation. But as the broadband infrastructure has improved, the use of
                    telemedicine is becoming more widely available. Telemedicine, in short, is the provision of medical
                    services remotely through the use of telecommunications.But to do this requires electronic transfer
                    of medical data. Such medical data may be:
                  </p>
                  <ul>
                    <li>
                      • Biomarkers (electric and not), ie in vivo measurements:It is now possible to transmit any in
                      vivo signal, as they take the form of multi-channel one-dimensional recordings with sampling
                      requirements to which the existing telecommunications infrastructure can quite easily meet.
                      Typical examples of such signals are the signals that monitor vital functions of the human body
                      such as Electrocardiograms, Temperature measurements, Blood pressure, Respiration rate. <br />
                    </li>
                    <li>
                      • Laboratory tests, ie in vitro measurements: Hematological, Cytological, Microbiological
                      <br />
                    </li>
                    <li>
                      {' '}
                      • Two-dimensional 2D or 3D images produced by imaging devices: X-rays, CT and MRI scans,
                      Ultrasound, Vascular charts, Microscope images.
                      <br />
                    </li>
                    <li>
                      {' '}
                      • Medical file data of the examinee: Personal information, History of diseases, Past analyzes and
                      examinations. Along with the medical data itself, one-way or two-way and accompanying data, ie
                      voice (audio) and animation (video) can be sent. Remote monitoring, also known as self-monitoring,
                      allows doctors to monitor a patient remotely using various technological Appliances.This method is
                      used to monitor chronic diseases, such as heart disease,diabetes mellitus or asthma.These services
                      can provide comparable health outcomes in traditional patient patient meetings, provide greater
                      patient satisfaction and be more economical.{' '}
                    </li>
                  </ul>
                  <p>
                    {' '}
                    Telemedicine is sometimes used as a synonym or in a more limited sense to describe remote clinical
                    services, such as diagnosis and monitoring. When rural areas, lack of transportation, lack of
                    mobility, reduced funding or lack of staff restrict access to care, then teleotherapy can bridge the
                    gap. So can it offer provider (doctor) training, meetings, supervision and presentations between
                    professionals? Telemedicine could includes two doctors discussing a case via video conference,a
                    robotic surgery via remote access or physiotherapy via digital monitoring instruments. All these
                    tests should be forwarded to a senior specialist for monitoring. In order to evaluate information
                    through the continuous flow of information for the proper creation of the platform for communication
                    between the participants.{' '}
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section id='request-response'>
            <h2 style={{ textAlign: 'center' }} id='need'>
              Why we need telemedicine?
            </h2>
            <p className='text-justify'>
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
              Homogenization of medical services The question that needs to be investigated is whether "is there really
              a need for Telemedicine services"? There are many, many times different views. But let's look at some
              features that will make it easier for us to form our own point of view: To the question which factors
              indicate the development of Telemedicine services we will mention the following:
              <li>• Equality of access</li>
              <li>• The quality of services</li>
              <li>• The improvement of the clinical result.</li>
              <li>• Demographic changes</li>
              In addition, it is observed that not all citizens have equal rights to medical care and its services.
              Services such as: health education, sports, culture, economic nature as, leisure, information,
              information. The reasons for this are different and vary, ie they are geographical, economic, teachers. We
              conclude that inequalities can be large and often impossible.
            </ul>
          </section>
          <section id='auto'>
            <h2>Autoimmune Diseases.</h2>
            <p style={{ fontFamily: 'serif' }}>
              "New developments, concerning the understanding of the mechanisms of development of autoimmune diseases,
              have led to a more effective treatment and improvement of the course of this category of
              diseases.Autoimmune diseases are mainly due to risk factors associated with lifestyle and diet. "As these
              factors are variable, that is, they can change, targeted medical interventions in lifestyle and diet, lead
              to a substantial improvement in the course of the disease, as well as to improving the quality of life of
              people who have developed autoimmune disease."
            </p>
            <p>
              Autoimmune diseases are chronic inflammatory diseases that occur when the body attacks and destroys its
              own cells and organs. More specifically, it is the leading cause of chronic illnesses and affects the
              health of most people more than it affects heart disease and cancer combined. The human body's immune
              system plays a key role in maintaining good health. However, there are cases where he confuses his role
              and ends up treating elements of the organization as his enemy. As a result of autoimmune diseases, of
              which 5% of the population suffers.
            </p>
            <p>
              The defense (immune) system in combination with the neuro-aesthetic system determine and maintain the
              integrity of the body. The immune system is made up of cells that circulate in the blood and are found in
              almost all tissues. Using a complex system is a function that constantly receives stimuli of different
              types, communicating in parallel with the nervous and endocrine systems.
            </p>
            <p>
              Autoimmune diseases are manifested by the manifestation of various symptoms, such as fever, malaise or
              pain in the joints, rash or hypertension. In general, they are chronic diseases that show exacerbations
              and relapses. The earlier they are diagnosed, the better their response to medication. Tissue damage heals
              and the disease remains in remission for years.
            </p>
            <p>
              To date, more than 150 different autoimmune diseases have been identified with the common denominator of
              immune system dysfunction. Autoimmune diseases are diseases that quite often require taking life-saving
              medications. Until recently, their treatment and treatment was mainly symptomatic and aimed at reducing
              inflammation and suppressing the immune system.
            </p>
          </section>
          <section>
            <h2>Autoimmune bowel diseases</h2>
            <p>
              The exact cause of idiopathic bowel disease has not yet been discovered. However, the prevailing view is
              that it is due to the fact that environmental factors (eg childhood health, smoking, diet, infections,
              breastfeeding, drugs) in combination with genetically predisposed individuals affect the intestinal
              microbial population causing immune disorders. They have a variety of symptoms, both in the digestive
              system and in other organs of the body. The intensity of the symptoms is proportional to the extent of the
              intestinal tract involvement.
            </p>
            <p>
              Treatment includes a variety of drugs that are used alone or in combination. Many patients are often asked
              for nutritional support with elementary and polymer diets, while some patients will need surgery. The
              challenge in treatment is to move from a strategic symptom relief and maintenance recession to an
              aggressive one aimed at the complete cure of intestinal inflammation, thus seeking to change the natural
              course of the disease. Of course the approach differs from patient to patient and differs based on various
              factors.
            </p>
            <p>
              Idiopathic intestinal diseases are one of the biggest challenges in the medical field and especially in
              gastroenterology. Treatment with biological agents has successfully changed the treatment of inflammation,
              today diseases are almost treatable through proper treatment or surgery, with the result that most people
              continue a healthy normal life. Of particular interest are the genetic tests and studies, where there is
              already a great deal of progress at the research level in terms of recognition and understanding resulting
              in the production of new drugs.
            </p>
          </section>
          <section id='medit'>
            <h2>Medical Informatics</h2>
            <p>
              Medical Informatics therefore has the content of basic research, clinical medicine, and health service
              organization. In recent years it has escaped the narrow confines of the design and implementation of
              information systems and is a comprehensive, analytical, and rational method of approaching medical
              research and practice. By the term medical informatics, we refer to all the information technologies
              (computer systems, databases, software, multimedia applications, etc.) used in the provision of health
              services and in medical education. The term telemedicine refers to the use of telecommunications to
              provide the above health and education services. Due to the fact that most telemedicine applications
              involve and rely on the use of medical information components, it is often difficult to distinguish
              between the two. Of course the end users of the system, patients and doctors should not be preoccupied
              with such differences, as we will see for them the system they use must be "transparent" from a
              technological point of view. This means that all they are interested in is, any telemedicine system, to
              provide them with a set of facilities (services) and they can use these services without having to know or
              deal with the technical details of the implementation, for example with the transmission rate provided by
              the telecommunications organization or with the protocols of a network.
            </p>
            <p>
              Some services offered by medical IT such as teleconferencing which provides the possibility for
              audiovisual contact between remote points using cameras and microphones as well as network equipment.
              Thus, doctors can carry out medical consultations between the hospitals of the area, diagnose patients
              from another hospital and provide advice to non-specialized doctors or doctors of other specialties. This
              is crucial in the case of remote health centers as well as in dealing with emergencies. The following
              options are also offered to the doctor:
            </p>
            <ul>
              <li>• Diagnose the patient remotely</li>
              <li>• Can consult a specialist colleague about the patient being examined.</li>
              <li>• Direct access to the patient file</li>
              <li>• Reduction of diagnosis time</li>
              <li>• Immediate information and briefing</li>
              <li>• Direct communication with colleagues through a network</li>
            </ul>
          </section>
          <section id='follow'>
            <h2>Follow-up of patients from home</h2>
            <p>
              In this section we will discuss how useful its services are at home to people with chronic diseases.
              Unfortunately, there are many chronic diseases that need constant medical attention. Changes in weight,
              pulse, oxygen levels in the blood can be life issues that need to be diagnosed and treated immediately by
              our doctor. What if we are alone at home or our own are unable to help us and the distance from the
              nearest hospital is long? Our solution is provided by remote monitoring of the patient.
            </p>
            <p>
              The effort is facilitated by the development of technology and the reduction of the cost of electronic
              boards (chips) in combination with the increase of the data transmission speed through telephone, network
              or wireless networks. The spread of modern technology to the general public has familiarized patients with
              the use of the internet and has brought them closer to current events and developments in medicine. The
              benefits of home patient monitoring are many.
            </p>
            <ul>
              <li>
                • Immediate diagnosis of possible deregulation of patients with heart failure, resulting in timely
                change of treatment
              </li>
              <li>
                • Patients are vigilant about treatment, lifestyle resulting in shortages of medication, diet and
                exercise.
              </li>
              <li>
                • Relapses of illness and long stays in hospitals are avoided. Careful use of Telemedicine is made in
                patients with heart failure, diabetes, arrhythmias, and lung diseases.
              </li>
            </ul>
            <br />
            <ul>
              These patients are equipped with data transmission devices such as:
              <li>
                • Permanent implantable defibrillators that alert the doctor if they are activated by a potentially
                dangerous arrhythmia
              </li>
              <li>• Special watch that controls blood sugar levels.</li>
              <li>
                • Special chip implanted under the skin and identified by a special manual scanner, which detects a
                number that is unique to each patient and refers to the patient's electronic medical history.
              </li>
            </ul>
          </section>
        </div>
        <nav class='section-nav'>
          <ol style={{ background: '#0000009e', borderRadius: '1em' }}>
            <li class=''>
              <a href='#medcare'>Medical Care</a>
            </li>

            <li>
              <a href='#need'>Telemedicine</a>
            </li>
            <li>
              <a href='#auto'>Autoimmune Diseases</a>
            </li>
            <li class=''>
              <a href='#medit'>Medical IT</a>
            </li>
            <li class=''>
              <a href='#follow'>Patients from Home</a>
            </li>
            {/*	<li class=""><a href="#options">Treatment Options</a></li>
					<li class=""><a href="#future">Future treatments</a></li>
					<li class=""><a href="#support">Coping and support</a></li>
                    <li class=""><a href="#quest">Questionairie</a></li>*/}
          </ol>
        </nav>
      </main>
      <footer style={{ textAlign: 'center', padding: '5px', color: 'rgb(235 230 230 / 48%)' }}>
        You can contact us at{' '}
        <a style={{ color: 'rgb(235 230 230 / 48%)' }} href='mailto:kakaziag@csd.auth.gr'>
          kakaziag@csd.auth.gr{' '}
        </a>
        <br />
        This University Thesis created by Gkakazianis. ❤
      </footer>
    </>
  );
};

export default HomePage;
