import React from 'react'

const About = () => {
  return (
    <>
      <h1>About iNoteBook: Your Private Note-Taking Haven</h1>
      <p className='mt-4'> <b> Welcome to iNoteBook, your personal sanctuary for organizing thoughts, ideas, and important information. Our platform is designed to empower you with a seamless and secure note-taking experience. Whether you're a student, professional, or simply someone who loves jotting down insights, iNoteBook is here to elevate your note-taking game while prioritizing your privacy.</b></p>
      <div class="accordion accordion-flush" id="accordionFlushExample" style={{ border: "1px solid black" }}>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              Our Mission
            </button>
          </h2>
          <div class="line" style={{
            width: "100%",
            height: "1.01px",
            backgroundColor: "rgba(0, 0,10)"
          }}>
          </div>
          <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">At iNoteBook, we understand the significance of capturing fleeting thoughts and valuable details. Our mission is to provide a digital haven where you can effortlessly store, update, and manage your notes, all while ensuring the highest level of security. We believe that your personal notes are just that – personal. That's why we've gone to great lengths to create a space where your thoughts are safe, sound, and shielded from prying eyes.</div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              Features You'll Love
            </button>
          </h2>
          <div class="line" style={{
            width: "100%",
            height: "0.7px",
            backgroundColor: "rgba(0, 0,0.3)"
          }}>

          </div>
          <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
              <b> Seamless Note-Taking: </b> With iNoteBook, jotting down your thoughts is a breeze. Our intuitive interface lets you create new notes within seconds, allowing you to capture your ideas without disruption. <br /> <br />

              <b> Effortless Updates:</b> Life is dynamic, and so are your thoughts. Our platform lets you update your notes easily, ensuring that your information remains current and relevant. <br /> <br />

              <b> Ultimate Privacy:</b> We take your privacy seriously. Your notes are yours and yours alone. iNoteBook employs state-of-the-art encryption and security measures to guarantee that your notes remain confidential and inaccessible to anyone but you. <br /> <br />

              <b> Secure Deletion:</b> When a note has served its purpose, our secure deletion feature ensures that it is permanently removed from our servers, leaving no trace behind.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              Our Commitment to Security
            </button>
          </h2>
          <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
              We understand that entrusting your personal thoughts to a digital platform requires unwavering trust. That's why we've implemented robust security measures to ensure the utmost protection of your notes. Our commitment to your security includes: <br /> <br />

              <b> End-to-End Encryption:</b> All notes are encrypted from end to end, ensuring that only you can access and decrypt your private information. <br /> <br />

              <b> Zero Data Sharing: </b> Your notes are exclusively yours. We do not engage in any form of data sharing, selling, or third-party access. <br /> <br />

              <b> Secure Servers: </b> Our servers are equipped with advanced security protocols to safeguard your data against unauthorized access.</div>
          </div>
        </div>
      </div >
    </>
  )
}

export default About
