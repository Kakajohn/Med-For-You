import React from 'react';
import '../sass/components/_top_button.scss';
import '../sass/components/_navbar.scss';
import '../sass/components/_articles.scss';
import { Link, useNavigate } from 'react-router-dom';
import NavigationBar from './NavigationBar';

const Articles = () => {
  window.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        if (entry.intersectionRatio > 0) {
          document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('active');
        } else {
          document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('active');
        }
      });
    });

    // Track all sections that have an `id` applied
    document.querySelectorAll('section[id]').forEach(section => {
      observer.observe(section);
    });
  });

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
      <NavigationBar />
      <div class='container'>
        <div class='row'>
          <div class='col-10'>
            <section id='medcare' className='row'>
              <div className='col-12'style={{marginLeft:'4rem'}}>
                <h1 className='text-center text-danger py-4'>Familial Adenomatous Polyposis (F.A.P.)</h1>
                <div className='card text-light border-danger border-2' style={{ backgroundColor: '#151515' }}>
                  <div className='card-body'>
                    {/* <h1 id='overview'>Familial Adenomatous Polyposis (F.A.P.)</h1> */}
                    <h2>Overview</h2>
                    <p style={{ textAlign: 'justify', fontFamily: 'Raleway, sans-serif' }}>
                      Familial adenomatous polyposis (FAP) is an inherited disorder characterized by cancer of the large
                      intestine (colon ) and rectum. People with the classic type of familial adenomatous polyposis may
                      begin to develop multiple noncancerous (benign) growths (polyps ) in the colon as early as their
                      teenage years. Familial adenomatous polyposis (FAP) is a rare, inherited condition caused by a
                      defect in the adenomatous polyposis coli (APC) gene. Most people inherit the gene from a parent.
                      But for 25 to 30 percent of people, the genetic mutation occurs spontaneously. FAP causes extra
                      tissue (polyps) to form in your large intestine (colon) and rectum. Polyps can also occur in the
                      upper gastrointestinal tract, especially the upper part of your small intestine (duodenum). If
                      untreated, the polyps in the colon and rectum are likely to become cancerous when you are in your
                      40s.
                      <p id='symptoms'></p>Most people with familial adenomatous polyposis eventually neFnaved surgery
                      to remove the large intestine to prevent cancer. The polyps in the duodenum also can develop
                      cancer, but they can usually be managed by careful monitoring and by removing polyps regularly.
                      Some people have a milder form of the condition, called attenuated familial adenomatous polyposis
                      (AFAP). People with AFAP usually have fewer colon polyps (an average of 30) and develop cancer
                      later in life.
                    </p>
                    <h1>Symptoms & Causes</h1>
                    <p>
                      The main sign of FAP is hundreds or even thousands of polyps growing in your colon and rectum,
                      usually starting by your mid-teens. The polyps are nearly 100 percent certain to develop into
                      colon cancer or rectal cancer by the time you're in your 40s Familial adenomatous polyposis is
                      caused by a defect in a gene that's usually inherited from a parent. But some people develop the
                      abnormal gene that causes the condition.{' '}
                    </p>
                    <h4>Risk factors & Complications</h4>
                    <p>
                      Your risk of familial adenomatous polyposis is higher if you have a parent, child, brother, or
                      sister with the condition.
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                      In addition to colon cancer, familial adenomatous polyposis can cause other complications: <br />
                      <ul>
                        <li>
                          {' '}
                          💡 Duodenal polyps. These polyps grow in the upper part of your small intestine and may become
                          cancerous. But with careful monitoring, duodenal polyps can often be detected and removed
                          before cancer develops. <br />
                        </li>
                        <li>
                          💡 Periampullary polyps. These polyps occur where the bile and pancreas ducts enter the
                          duodenum (ampulla). Periampullary polyps might become cancerous but can often be detected and
                          removed before cancer develops. <br />
                        </li>
                        <li>
                          💡 Gastric fundic polyps. These polyps grow in the lining of your stomach. <br />
                        </li>
                        <li>
                          💡 Desmoids. These noncancerous masses can arise anywhere in the body but often develop in the
                          stomach area (abdomen). Desmoids can cause serious problems if they grow into nerves or blood
                          vessels or exert pressure on other organs in your body. <br />
                        </li>
                        <li>
                          💡 Other cancers. Rarely, FAP can cause cancer to develop in your thyroid gland, central
                          nervous system, adrenal glands, liver or other organs. <br />
                        </li>
                        <li>
                          💡 Noncancerous (benign) skin tumors. <br />
                        </li>
                        <li>
                          💡 Benign bone growths (osteomas). <br />
                        </li>
                        <li>
                          💡 Congenital hypertrophy of the retinal pigment epithelium (CHRPE). These are benign pigment
                          changes in the retina of your eye. <br />
                        </li>
                        <li>
                          💡 Dental abnormalities. These include extra teeth or teeth that don't come in. <br />
                        </li>
                        <p id='fdiagnosis'></p>
                        <li>
                          💡 Low numbers of red blood cells (anemia). <br />
                        </li>
                      </ul>
                    </p>
                    <h1>Diagnosis</h1>
                    <p>
                      You're at risk of familial adenomatous polyposis if you have a parent, child, brother or sister
                      with the condition. If you're at risk, it's important to be screened frequently, starting in
                      childhood. Annual exams can detect the growth of polyps before they become cancerous.
                      <br />
                      <h3>Screening</h3>
                      <ul>
                        <li>
                          💡 Sigmoidoscopy. A flexible tube is inserted into your rectum to inspect the rectum and
                          sigmoid — the last two feet of the colon. For people with a genetic diagnosis of FAP or family
                          members at risk who haven't had genetic testing, the American College of Gastroenterology
                          recommends annual sigmoidoscopy, beginning at ages 10 to12 years. <br />
                        </li>
                        <li>
                          💡 Colonoscopy. A flexible tube is inserted into your rectum to inspect the entire colon. Once
                          polyps are found in your colon, you need to have an annual colonoscopy until you have surgery
                          to remove your colon. <br />
                        </li>
                        <li>
                          💡 Esophagogastroduodenoscopy (EGD) and side-viewing duodenoscopy. Two types of scopes are
                          used to inspect your esophagus, stomach and upper part of the small intestine (duodenum and
                          ampulla). The doctor may remove a small tissue sample (biopsy) for further study. <br />
                        </li>
                        <li>
                          💡 CT or MRI. Imaging of the abdomen and pelvis may be used, especially to evaluate desmoid
                          tumors.
                        </li>
                      </ul>
                    </p>
                    <h2 id='genetic'>Genetic Testing</h2>
                    <p>
                      A simple blood test can determine if you carry the abnormal gene that causes FAP. Genetic testing
                      may also detect whether you're at risk of complications of FAP. Your doctor may suggest genetic
                      testing if:
                      <ul>
                        <li>
                          💡 You have family members with FAP <br />
                        </li>
                        <li>
                          💡 You have some, but not all, of the signs of FAP <br />
                        </li>
                        <li>
                          💡 Ruling out FAP spares at-risk children years of screening and emotional distress. For
                          children who do carry the gene, appropriate screening and treatment greatly reduce the risk of
                          cancer.
                        </li>
                      </ul>
                    </p>
                    <h2 id='ftreatment'>Additional tests</h2>
                    <p>
                      Your doctor may recommend thyroid exams and other tests to detect other medical problems that can
                      occur if you have FAP.
                    </p>
                    <h1>Treatment</h1>
                    <p>
                      At first, your doctor will remove any small polyps found during your colonoscopy exam. Eventually,
                      though, the polyps will become too numerous to remove individually, usually by your late teens or
                      early 20s. Then you will need surgery to prevent colon cancer. You will also need surgery if a
                      polyp is cancerous. You may not need surgery for AFAP.
                    </p>
                    <h2>Minimally invasive colorectal surgery</h2>
                    <p>
                      Your surgeon may decide to perform your surgery laparoscopically, through several small incisions
                      that require just a stitch or two to close. This minimally invasive surgery usually shortens your
                      hospital stay and allows you to recover more quickly.
                      <br />
                      <p>
                        Depending on your situation, you may have one of the following types of surgery to remove part
                        or all of the colon:
                      </p>
                    </p>
                    <li>
                      💡 Subtotal colectomy with ileorectal anastomosis, in which the rectum is left in place <br />{' '}
                    </li>
                    <li>
                      💡 Total proctocolectomy with a continent ileostomy, in which the colon and rectum are removed and
                      an opening (ileostomy) is created, usually on the right side of your abdomen <br />
                    </li>
                    <li>
                      {' '}
                      💡 Total proctocolectomy with ileoanal anastomosis (also called J-pouch surgery), in which the
                      colon and rectum are removed and a part of the small intestine is attached to the rectum <br />
                    </li>
                    <h2 id='folloq'>Follow-up treatment</h2>
                    <p>
                      Surgery doesn't cure FAP. Polyps can continue to form in the remaining or reconstructed parts of
                      your colon, stomach and small intestine. Depending on the number and size of the polyps, having
                      them removed endoscopically may not be enough to reduce your risk of cancer. You may need
                      additional surgery.
                    </p>
                    <p>
                      You will need regular screening — and treatment if needed — for the complications of familial
                      adenomatous polyposis that can develop after colorectal surgery. Depending on your history and the
                      type of surgery you had, screening may include:
                    </p>
                    <ul>
                      <li>💡 Sigmoidoscopy or colonoscopy</li>
                      <li>💡 Upper endoscopy</li>
                      <li>💡 Thyroid ultrasound</li>
                      <li>💡 CT or MRI to screen for desmoid tumors</li>
                    </ul>{' '}
                    <br />
                    <p>
                      Depending on your screening results, your doctor may additional treatments for the following
                      issues:
                    </p>
                    <ul>
                      <li>
                        💡 Duodenal polyps and periampullary polyps. Your doctor may recommend surgery to remove the
                        upper part of the small intestine (duodenum and ampulla) because these types of polyps can
                        progress to cancer.
                      </li>
                      <li>
                        💡 Desmoid tumors. You may be given a combination of medications, including nonsteroidal
                        anti-inflammatory drugs, anti-estrogen and chemotherapy. In some cases, you may need surgery.
                      </li>
                      <li>
                        💡 Osteomas. Doctors may remove these noncancerous bone tumors for pain relief or cosmetic
                        reasons.
                      </li>
                    </ul>
                    <h2 id='coping'>Potential future treatments</h2>
                    <p>
                      Researchers continue to evaluate additional treatments for FAP. In particular, the use of pain
                      relievers such as aspirin and nonsteroidal anti-inflammatory drugs (NSAIDs), as well as a
                      chemotherapy drug, are being investigated.
                    </p>
                    <h1>Coping and Support</h1>
                    <p style={{ fontWeight: 'bold', fontSize: 'large' }}>
                      Some people find it helpful to talk with others who share similar experiences. Consider joining an
                      online support group, or ask your doctor about support groups in your area.
                    </p>
                    <p style={{ fontWeight: 'bold', fontSize: 'large' }}>
                      Preparing for your appointment What you can do Your time with your doctor may be limited, so try
                      to prepare a list of questions. For FAP, some basic questions to ask your doctor may include:
                    </p>
                    <ul>
                      <li>💡 What are the chances that I will pass the condition on to my children?</li>
                      <li>💡 How often will I need to have screening?</li>
                      <li>💡 What kind of tests will my screening involve?</li>
                      <li>💡 Will I need surgery?</li>
                      <li>💡 If I need surgery, when will I need it?</li>
                      <li>💡 What kind of surgery will I need?</li>
                      <li>💡 Will surgery cure my FAP?</li>
                      <li>💡 If not, what follow-up and treatment will I need?</li>
                      <li>💡 How accurate is genetic testing?</li>
                      <p id='Crohn'></p>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            <section id='medcare' className='row'>
              <div className='col-12' style={{marginLeft:'4rem'}}>
                <h1 className='text-center text-danger py-4'>Crohn.</h1>
                <div className='card text-light border-danger border-2' style={{ backgroundColor: '#151515' }}>
                  <div className='card-body'>
                    <h1>Crohn's Disease.</h1>
                    <h2></h2>
                    <p style={{ textAlign: 'justify', fontFamily: 'Raleway, sans-serif' }}>
                      Crohn’s disease is an inflammatory bowel disease that causes chronic inflammation of the
                      gastrointestinal tract. ​If you have been diagnosed with Crohn’s disease or are looking for more
                      information about the condition, we are here to help. Living <p id='over'></p> with a chronic
                      illness can be stressful and overwhelming. We can provide you with information and resources to
                      help you manage the physical and emotional symptoms of Crohn’s disease.
                    </p>
                    <h2>Overview</h2>
                    <p>
                      Crohn’s disease is a chronic inflammatory condition of the gastrointestinal tract. Understanding
                      Crohn’s disease can help you and your loved ones navigate the uncertainty that comes with a new
                      diagnosis. Crohn’s disease belongs to a group of conditions known as inflammatory bowel diseases,
                      or IBD. It is named after Dr. Burrill B. Crohn, who first described the disease in 1932 along with
                      his colleagues, Dr. Leon Ginzburg and Dr. Gordon D. Oppenheimer
                    </p>
                    <ul>
                      <li>
                        💡 IBD affects an estimated 3 million Americans. Men and women are equally likely to be affected
                        by Crohn's disease.
                      </li>
                      <li>
                        💡 The disease can occur at any age, but Crohn’s disease is most often diagnosed in adolescents
                        and adults between the ages of 20 and 30.
                      </li>
                      <li>
                        💡 Studies have shown that between 1.5 percent and 28 percent of people with IBD have a
                        first-degree relative, such as a parent, child, or sibling, who also has one of the diseases.
                      </li>
                      <li>
                        💡 Even though there is genetic component associated with increased risk of IBD, it is
                        impossible to predict who may get Crohn’s disease based on family history.
                      </li>
                      <li>
                        💡 Crohn’s disease can affect people from all ethnic backgrounds. The disease is more common in
                        Caucasians, though the rates of Crohn’s disease have increased among Hispanics and Asians in
                        recent years.
                      </li>
                    </ul>
                    <ul>
                      <li id='causes'>
                        💡 Can affect any part of the GI tract from the mouth to the anus, but most commonly affects the
                        end of the small bowel (ileum) and the beginning of the colon
                      </li>
                      <li>💡 Can affect the entire thickness of the bowel wall</li>
                      <li>
                        💡 Inflammation of the intestine can “skip,” or leave normal areas in between patches of
                        diseased intestine
                      </li>
                    </ul>
                    <h1>Causes</h1>
                    <br /> <h2>Here's what we do know:</h2>
                    <ul>
                      <li>💡 Men and women are equally likely to be affected.</li>
                      <li>
                        💡 The disease can occur at any age, but Crohn’s disease is most prevalent in adolescents and
                        adults between the ages of 15 and 35.
                      </li>
                      <li>💡 Diet and stress may aggravate Crohn’s disease, but do not cause the disease.</li>
                      <li>
                        💡 Recent research suggests hereditary, genetic, and environmental factors contribute to Crohn’s
                        disease development.
                      </li>
                    </ul>
                    <br /> <h2>Crohn’s Disease and the Immune System</h2>
                    <p>
                      A person’s immune system usually attacks and kills foreign invaders like bacteria, viruses, fungi,
                      and other microorganisms. During a normal immune response, cells travel out of the blood to the
                      intestines and produce inflammation. Under normal circumstances, harmless bacteria that’s present
                      in the GI tract are protected from an immune system attack.
                    </p>
                    <br /> <h2>In people with IBD:</h2>
                    <ul>
                      <li>
                        💡 These harmless bacteria are mistaken for foreign invaders and the immune system mounts a
                        response.
                      </li>
                      <li>
                        💡 The inflammation caused by the immune response does not go away. This leads to chronic
                        inflammation, ulceration, thickening of the intestinal wall, and, eventually, symptoms of
                        Crohn’s disease.
                      </li>
                    </ul>
                    <br /> <h2>Genetic Factors</h2>
                    <p>
                      Crohn’s disease tends to run in families, so if you or a close relative has the disease, your
                      family members have an increased chance of developing Crohn’s. Studies have shown that between 5%
                      and 20% of people with IBD have a first-degree relative, such as a parent, child, or sibling, who
                      also has one of the diseases. The genetic risk is greater with Crohn’s disease than ulcerative
                      colitis.
                    </p>
                    <h2>Other Genetic Risk Factors</h2>
                    <ul>
                      <li>
                        💡 The risk of Crohn’s disease or ulcerative colitis is substantially higher when both parents
                        have IBD.
                      </li>
                      <li>
                        💡 The disease is most common among people of eastern European backgrounds, including Jews of
                        European descent.
                      </li>
                      <li>
                        💡 There have been an increased number of cases reported in African-American populations in
                        recent years.
                      </li>
                    </ul>
                    {/*} <br /> <h2>Environmental Factors</h2>
            <p>Where you live appears to play a role in the development of Crohn’s disease.</p>*/}
                    <br /> <h2>Here’s where Crohn’s disease is more common:</h2>
                    <ul>
                      <li>💡 Developed countries, rather than undeveloped countries</li>
                      <li>💡 Urban cities and towns, rather than rural areas</li>
                      <li>💡 Northern climates, rather than southern climates</li>
                    </ul>
                    <br /> <h2>Signs and Symptoms of Crohn’s Disease</h2>
                    <p>
                      Crohn’s disease can affect each patient a little differently. We are here to help guide you
                      through the most common signs and symptoms of Crohn’s disease. The symptoms you or your loved one
                      may experience depends on which part of the GI tract is affected.
                    </p>
                    <br />
                    <h2>Crohn’s Disease Complications</h2>
                    <p>
                      While Crohn’s disease is located in the GI tract, it can affect your overall health and cause more
                      serious medical issues.
                    </p>
                    <ul>
                      <li>💡 Loss of appetite</li>
                      <li>💡Weight loss</li>
                      <li>💡 Low energy and fatigue</li>
                      <li>💡 Delayed growth and development in children</li>
                    </ul>
                    <p>In more severe cases, Crohn’s disease can lead to serious complications.</p>
                    <ul>
                      <li>
                        💡 Fissures are tears in the lining of the anus, which can cause pain and bleeding especially
                        during bowel movements.
                      </li>
                      <li>
                        💡 A fistula, caused by inflammation, is an abnormal channel that forms between one part of the
                        intestine and another, or between the intestine and the bladder, vagina, or skin. Fistulas are
                        most common in the anal area and require immediate medical attention.
                      </li>
                      <li>💡 A stricture is a narrowing of the intestine as a result of chronic inflammation.</li>
                    </ul>
                    <br /> <h2>Symptoms Beyond the Intestine</h2>
                    <p>
                      Inflammatory bowel disease (IBD) can cause systemic symptoms outside the GI tract that affect your
                      overall health and your quality of life.
                    </p>
                    <ul>
                      <li>💡 Redness or pain in the eyes, or vision changes</li>
                      <li>💡 Mouth sores</li>
                      <li>💡 Swollen and painful joints</li>
                      <li>💡 Skin complications, such as bumps, sores, or rashes</li>
                      <li>💡 Fever</li>
                      <li>💡 Loss of appetite</li>
                      <li>💡 Weight Loss</li>
                      <li>💡 Fatigue</li>
                      <li>💡 Night sweats</li>
                      <li>💡 Loss of normal menstrual cycle</li>
                      <li id='diagnosis'>💡 Osteoporosis</li>
                      <li>💡 Kidney stones</li>
                      <li>💡 Rare liver complications, including primary sclerosing cholangitis and cirrhosis</li>
                    </ul>
                    <br /> <h1>Diagnosis</h1>
                    <br /> <h2>Crohn’s Disease Diagnosis and Testing</h2>
                    <p>
                      Crohn’s disease has a wide range of symptoms that vary from person to person. We are by your side
                      as you navigate the diagnostic process, letting you know what to expect each step of the way.
                      There is no single test to confirm a Crohn’s diagnosis, and Crohn’s disease symptoms are often
                      similar to other conditions, including bacterial infection. Your healthcare providers should
                      evaluate your current medical history and use information from diagnostic testing to exclude other
                      potential causes of your symptoms. This process can take some time. If you feel you or your loved
                      one are experiencing symptoms that could be Crohn's disease, be sure to see your doctor as soon as
                      possible.
                    </p>
                    <h2>Initial Testing and Evaluation</h2>
                    <p>
                      The first step to diagnosis and treatment is a standard physical exam of your body. Your doctor
                      will speak to you and ask questions about your overall health, diet and nutrition, family history,
                      and your daily routine.
                    </p>
                    <br /> <h2>What to Expect</h2>
                    <ul>
                      <li>
                        💡 Your doctor may order diagnostic testing to look for signs of Crohn’s disease and rule out
                        other possible medical conditions.
                      </li>
                      <li>💡 Your first tests will likely include laboratory tests of your blood and stool.</li>
                      <li>
                        💡 Further testing could include X-rays of the upper and lower GI tract. Your doctor may
                        recommend a test that uses a contrast chemical that helps your doctors see a more clear and
                        detailed picture of your GI tract. The type of contrast used varies by test.
                      </li>
                      <li>
                        💡 Consider bringing a trusted family member or close friend to your appointments. This may help
                        ease your stress and help you later remember information from your doctor.
                      </li>
                    </ul>
                    <h3>Communication Tips</h3>
                    <ul>
                      <li>
                        💡 Write down your symptoms and bring it to your appointments, so you don’t have to worry about
                        forgetting anything important.
                      </li>
                      <li>
                        💡 Ask your healthcare team which test is best for you, and contact your insurance to understand
                        coverage of costs.
                      </li>
                    </ul>
                    <br /> <h2 id=''>Endoscopy and Imaging</h2>
                    <p>
                      Your doctor may recommend additional testing to look inside your GI tract and intestine. While
                      these tests are more invasive and may sound frightening, they are often done in an outpatient
                      setting and your health care providers will be careful to minimize any discomfort.
                    </p>
                    <br /> <h2>Endoscopy</h2>
                    <p>
                      Your doctor may recommend an endoscopy to get a detailed look at the inside of your colon using a
                      small camera mounted to the end of a lighted tube.
                    </p>
                    <ul>
                      <li>
                        💡 A colonoscopy allows doctors to examine the colon, the lowest part of your large intestine,
                        by inserting a flexible, lighted tube through the opening to your anus.
                      </li>
                      <li>
                        💡 An upper endoscopy lets doctors see the gastrointestinal tract from the top down, using a
                        flexible, lighted tube that’s inserted through your mouth, down the esophagus, into your stomach
                        and as far down as the duodenum, which is the first section of your small intestine.
                      </li>
                    </ul>
                    <p>
                      Colonoscopies require bowel preparation. Talk to your healthcare team about ways to prepare, and
                      tips for making this preparation easier.
                    </p>
                    <br /> <h2>Biopsy</h2>
                    <p>
                      Your doctor may want to get a biopsy of your colon or another area of your GI tract while
                      performing a colonoscopy or endoscopy. During the biopsy, a small piece of tissue is removed from
                      the inside of the intestine for further testing and analysis.
                    </p>
                    <ul>
                      <li>
                        💡 Your biopsied tissue will be analyzed in a pathology laboratory and screened for disease.
                        Biopsies are also used for colorectal cancer screening.
                      </li>
                      <li>
                        💡 While a biopsy sounds scary, medical advances have made this procedure virtually pain-free.
                      </li>
                    </ul>
                    <br /> <h2>Chromoendoscopy</h2>
                    <p>
                      Your doctor may want use this technique during a colonoscopy to look for polyps or precancerous
                      changes.
                    </p>
                    <ul>
                      <li>
                        💡 During a chromoendoscopy, a blue liquid dye is sprayed into the colon to highlight and detect
                        slight changes in the lining of your intestine.
                      </li>
                      <li>💡 Polyps can then be removed and/or biopsied.</li>
                      <li>💡 It is common to have blue bowel movements following this procedure. </li>
                    </ul>
                    <br /> <h2>Small Intestine Imaging</h2>
                    <p>
                      These tests are used to examine portions of your intestine that can’t be easily seen by
                      colonoscopy or endoscopy. They work by using an oral contrast that you drink and that can be seen
                      on a fluoroscopic X-ray, computed tomography (CT) scan or a magnetic resonance imaging scan (MRI).
                    </p>
                    <ul>
                      <li>💡 You may also hear these tests referred to as enterography or enteroclysis.</li>
                      <li>
                        💡 Your doctor may a have you swallow a small, pill-sized camera, which will take pictures of
                        the small intestine and bowel as it travels through your GI tract. The camera is later expelled
                        during a bowel movement.
                      </li>
                      <li>💡 A balloon endoscopy may be needed to view hard-to-reach areas of the intestine.</li>
                    </ul>
                    <h3 id='options'>Communication Tips</h3>
                    <ul>
                      <li>
                        💡 Ask your healthcare providers what to expect during the procedure and if there are any risks
                        to consider.
                      </li>
                      <li>
                        💡 Most of the testing for Crohn’s disease is done in an outpatient setting. Consider have a
                        friend or family member drive you to keep you company and put your mind at ease.
                      </li>
                    </ul>
                    <h1>Crohn's Disease Treatment Options</h1>
                    <p>
                      A combination of treatment options can help you stay in control of your disease and help you to
                      lead a full and rewarding life. Remember that there is no standard treatment that will work for
                      all patients. Each patient’s situation is different and treatment must be followed for each
                      circumstance. Treatment for Crohn’s disease and other IBD varieties can include the use of
                      medication, alterations in diet and nutrition, and sometimes surgical procedures to repair or
                      remove affected portions of your GI tract.
                    </p>
                    <br /> <h2>Medication</h2>
                    <p>
                      Medication treating Crohn’s disease is designed to suppress your immune system’s abnormal
                      inflammatory response that is causing your symptoms. Suppressing inflammation not only offers
                      relief from common symptoms like fever, diarrhea, and pain, it also allows your intestinal tissues
                      to heal.
                      <br />
                      In addition to controlling and suppressing symptoms (inducing remission), medication can also be
                      used to decrease the frequency of symptom flare ups (maintaining remission). With proper treatment
                      over time, periods of remission can be extended and periods of symptom flare ups can be reduced.
                      Several types of medication are being used to treat Crohn's disease today.
                      <br />
                      <h4>Combination Therapy</h4>
                      In some circumstances, a health care provider may recommend adding an additional therapy that will
                      work in combination with the initial therapy to increase its effectiveness. For example,
                      combination therapy could include the addition of a biologic to an immunomodulator. As with all
                      therapy, there are risks and benefits of combination therapy. Combining therapies can increase the
                      effectiveness of IBD treatment, but there may also be an increased risk of additional side effects
                      and toxicity. Your health care provider will identify the treatment option that is most effective
                      for your individual health care needs.
                    </p>
                    <br /> <h2>Diet and Nutrition</h2>
                    <p>
                      While Crohn’s disease may not be the result of bad reactions to specific foods, paying special
                      attention to your diet may help reduce symptoms, replace lost nutrients, and promote healing. For
                      people diagnosed with Crohn’s disease, it is essential to maintain good nutrition because Crohn’s
                      often reduces your appetite while increasing your body’s energy needs. Additionally, common
                      Crohn’s symptoms like diarrhea can reduce your body’s ability to absorb protein, fat,
                      carbohydrates, as well as water, vitamins, and minerals. Many people who experience Crohn's
                      disease flare ups find that soft, bland foods cause less discomfort than spicy or high-fiber
                      foods. While your diet can remain flexible and should include a variety of foods from all food
                      groups, your doctor will likely recommend restricting your intake of dairy if you are found to be
                      lactose-intolerant. Watch this webcast to learn more about nutrition in inflammatory bowel
                      diseases
                    </p>
                    <br /> <h2>Surgery</h2>
                    <p>
                      Even with proper medication and diet, as many as two-thirds to three-quarters of people with
                      Crohn's disease will require surgery at some point during their lives. While surgery does not cure
                      Crohn's disease, it can conserve portions of your GI tract and return you to the best possible
                      quality of life. Surgery becomes necessary when medications can no longer control symptoms, or if
                      you develop a fistula, fissure, or intestinal obstruction. Surgery often involves removal of the
                      diseased segment of bowel (resection), the two ends of healthy bowel are then joined together
                      (anastomosis). While these procedures may cause your symptoms to disappear for many years, Crohn’s
                      frequently recurs later in life.
                    </p>
                    <h4>Key things to know about Surgery:</h4>
                    <ul>
                      <li>
                        💡 Over a span of 5 years, studies have shown that 18% of Crohn's patients may eventually
                        require surgery. This percentage has significantly declined within the last several years.
                      </li>
                      <li>
                        💡 Different types of procedures may be performed depending on the reason, severity of illness,
                        and location of the disease.
                      </li>
                      <li>
                        💡 For Crohn's disease patients, approximately 31% may require a second resection 10 years after
                        their first resection.
                      </li>
                    </ul>
                    <br /> <h1>GI Tract Inflammation</h1>
                    <p>
                      Crohn’s disease can affect any part of the GI tract, from your mouth to your anus. While symptoms
                      vary from patient to patient, there are some common symptoms of inflammation of the GI tract
                      caused by Crohn’s disease.
                    </p>
                    <ul>
                      <li>💡 Persistent diarrhea</li>
                      <li>💡 Rectal bleeding</li>
                      <li>💡 Urgent need to move bowels</li>
                      <li>💡 Abdominal cramps and pain</li>
                      <li>💡 Sensation of incomplete bowel evacuation</li>
                      <li>💡 Constipation, which can lead to bowel obstruction</li>
                    </ul>
                    <br /> <h2>Types of Crohn's disease</h2>
                    <p>
                      If you are diagnosed with Crohn’s disease, it’s important to know which part of your GI tract is
                      affected. While symptoms of Crohn’s disease can vary from person to person, the type of Crohn’s
                      you have impacts the symptoms and complications you may experience.
                    </p>
                    <br /> <h2>Ileocolitis</h2> <br />
                    <p>
                      This is the most common form of Crohn’s disease. It affects the end of the small intestine, known
                      as the terminal ileum, and the large intestine, also called the colon. Symptoms may include:
                      <ul>
                        <li>💡 Diarrhea and cramping</li>
                        <li>💡 Pain in the middle or lower right part of the abdomen</li>
                        <li>💡 Significant weight loss</li>
                      </ul>
                    </p>
                    <br /> <h2>Ileitis</h2> <br />
                    <p>This type of Crohn’s affects only the ileum. Symptoms may include:</p>
                    <ul>
                      <li>💡 Same as ileocolitis</li>
                      <li>
                        💡 In severe cases, complications may include fistulas or inflammatory abscess in the right
                        lower quadrant of the abdomen
                      </li>
                    </ul>
                    <br /> <h2>Gastroduodenal Crohn's Disease</h2>
                    <p>
                      This type affects the stomach and the beginning of the small intestine, called the duodenum.
                      Symptoms may include:
                    </p>
                    <ul>
                      <li>💡 Nausea</li>
                      <li>💡 Vomiting</li>
                      <li>💡 Loss of appetite</li>
                      <li>💡 Weight loss</li>
                    </ul>
                    <h2>Jejunoileitis</h2>
                    <p>
                      This type is characterized by patchy areas of inflammation in the upper half of the small
                      intestine, called the jejunum.
                    </p>
                    <ul>
                      Symptoms may include:
                      <li>Mild to intense abdominal pain and cramps following meals</li>
                      <li>Diarrhea</li>
                      <li>Fistulas may form in severe cases or after prolonged periods of inflammation</li>
                    </ul>
                    <br /> <h2>Crohn's (Granulomatous) Colitis</h2>
                    <p>This type affects only the colon, also known as the large intestine.</p>
                    <ul>
                      Symptoms may include:
                      <li>💡 Diarrhea</li>
                      <li>💡 Rectal bleeding</li>
                      <li>💡 Disease around the anus, including abscess, fistulas and ulcers</li>
                      <li>💡 Skin lesions and joint pains are more common in this form of Crohn's than in others</li>
                    </ul>
                    <br /> <h2>Ulceractive Colitis</h2> <br />
                    <ul>
                      <li>💡 Only the colon, also called the large intestine, is affected</li>
                      <li>💡 Affects only the innermost lining of the colon</li>
                      <li>💡 Inflammation of the intestine does not “skip”</li>
                    </ul>{' '}
                    <h2>Crohn’s Disease vs. Ulcerative Colitis</h2>
                    <p>
                      Crohn’s disease and ulcerative colitis share similar symptoms and they are both types of
                      inflammatory bowel disease (IBD), but they are not the same illness and they affect different
                      areas of the GI tract.
                    </p>
                    <ul>
                      Crohn's disease
                      <li>💡 Can affect any part of the GI tract from the mouth to the anus</li>
                      <li>💡 Can affect the entire thickness of the bowel wall</li>
                    </ul>
                    <img src='../../frontend/public/img/img1.jpg' alt='bowel' />
                    <ul id='quest'>
                      Ulcerative colitis
                      <li>💡 Only the colon and rectum (also known as the large intestine) are affected</li>
                      <li>💡 Affects the inner-most lining of the large intestine</li>
                    </ul>
                    <br />
                    <h1>Questions to Ask Your Doctor</h1>
                    <p>
                      When you are diagnosed with Crohn’s disease, it’s common to feel uncertain and worried. Crohn’s
                      disease can affect many aspects of your life in ways that can change over time.
                    </p>
                    <p>
                      {' '}
                      The best way to prepare for your life with Crohn’s disease is to learn as much as you can about
                      the disease. These questions will help you start a dialogue with your health care provider. The
                      more informed you are about Crohn’s disease, the better equipped you will be to manage your
                      disease and lead the life you want to live.
                    </p>
                    <br /> <h2> Understanding Crohn’s Disease What causes Crohn’s? disease</h2>
                    <ul>
                      <li>💡What are the signs and symptoms of Crohn’s?</li>
                      <li>💡 What type of Crohn’s do I have?</li>
                      <li>💡 What can I do to monitor my condition?</li>
                      <li>💡 How will I know if I’m having a flare up?</li>
                      <li>💡 How will I know if my Crohn’s is in remission?</li>
                    </ul>
                    <br /> <h2>Lifestyle and Relationships</h2>
                    <ul>
                      <li>💡 How will Crohn’s affect my ability to work, travel, and exercise?</li>
                      <li>💡 Should I modify my diet? If so, how?</li>
                      <li>💡 How will Crohn's disease affect family planning and pregnancy?</li>
                      <li>💡 How will other people react to my illness?</li>
                    </ul>
                    <br /> <h2>Exploring Treatment</h2>
                    <ul>
                      <li>💡 How is Crohn’s treated?</li>
                      <li>💡 What are the risks and benefits of treatment?</li>
                      <li>💡 What kind of side effects should I expect from my medication?</li>
                      <li>💡 Will I require surgery? If so, what does that entail?</li>
                      <li>💡 What other treatments are available?</li>
                    </ul>
                    <br /> <h2>Managing Your Disease</h2>
                    <ul>
                      <li>💡 How can I prevent flare-ups?</li>
                      <li>💡 When should I see a doctor?</li>
                      <li>💡 What can I do at home to ease my symptoms?</li>
                    </ul>
                    <br /> <h2> Stress Busting Tips</h2>
                    <ul>
                      <li>
                        💡 Take a pen and paper to your appointment so that you can write down terminology and any
                        concerns to address with your doctor.
                      </li>
                      <li>
                        💡 Ask your doctor or nurse how best to contact them in between appointments with follow up
                        questions.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* <span>scroll up</span>
          <BackToTop /> */}
          <div class='col-2' style={{marginLeft:'2rem'}}>
            <main>
              <div class='section-nav'>
                <ol
                  style={{
                    borderRadius: '1em',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '0'
                  }}
                >
                  <li>
                    <a href='#introduction'>F.A.P.</a>
                    <ul
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '0px !important'
                      }}
                    >
                      <li>
                        <a href='#overview'>Overview</a>
                      </li>
                      <li class=''>
                        <a href='#symptoms'>Symptoms & Causes</a>
                      </li>
                      {/* <li class=""><a href="#tests">Tests</a></li> */}
                      <li>
                        <a href='#fdiagnosis'>Diagnosis</a>
                      </li>
                      <li class=''>
                        <a href='#ftreatment'>Treatment</a>
                      </li>
                      {/* <li class=""><a href="#folloq">Follow-up treatment</a></li> */}
                      {/*	<li class=""><a href="#ptreatments">Potential future treatments</a></li>*/}
                      <li class=''>
                        <a href='#coping'>Coping and support</a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a href='#Crohn'>Crohn</a>
                    <ul>
                      <li>
                        <a href='#over'>Overview</a>
                      </li>
                      <li>
                        <a href='#causes'>Causes</a>
                      </li>
                      <li class=''>
                        <a href='#diagnosis'>Diagnosis</a>
                      </li>
                      {/* <li class=""><a href="#endoscopy">Endoscopy</a></li> */}
                      <li class=''>
                        <a href='#options'>Treatment</a>
                      </li>
                      {/*	<li class=""><a href="#future">Future treatments</a></li>
					              <li class=""><a href="#support">Coping and support</a></li>*/}
                      <li class=''>
                        <a href='#quest'>Questionairie</a>
                      </li>
                    </ul>
                  </li>
                </ol>
              </div>
            </main>
          </div>
        </div>
      </div>

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

export default Articles;
