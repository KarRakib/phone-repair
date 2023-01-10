import React from 'react'
import useTitle from '../../Hooks/UseTitle'

function Blogs() {
  useTitle('Blogs')
  return (
    <div>
      <div tabIndex={0} className="collapse">
        <div className="collapse-title text-xl font-medium">
          Difference between SQL and NoSQL
        </div>
        <div className="collapse-content">

          <div className="flex w-full">
            <div className="grid h-36 flex-grow card bg-base-300 rounded-box place-items-center">
              <h3 className='text-center text-xl'> SQL</h3>
              1.RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS). <br />
              2.These databases have fixed or static or predefined schema <br />
              3.These databases are not suited for hierarchical data storage. <br />
              4.These databases are best suited for complex queries

            </div>
            <div className="divider divider-horizontal">OR</div>
            <div className="grid h-36 flex-grow card bg-base-300 rounded-box place-items-center">
              <h3 className='text-center text-xl'> NoSQL</h3>
              1.Non-relational or distributed database system. <br />
              2.They have dynamic schema <br />
              3.These databases are best suited for hierarchical data storage. <br />
              4.These databases are not so good for complex queries
            </div>
          </div>
        </div>
      </div>

      <div tabIndex={1} className="collapse">
        <div className="collapse-title text-xl font-medium">
          2. What is the difference between javascript and NodeJS?
        </div>
        <div className="collapse-content">

          <div className="flex w-full">
            <div className="grid h-48 flex-grow card bg-base-300 rounded-box p-5 place-items-center">
              <h3 className='text-center text-xl'> JavaScript </h3>
              1.It is an accessible, bridge, parsed, lightweight, reactive, and web apps programming language. <br />
              2.It's a programming language, after all. Any browser with a competent browser engine will operate. <br />
              3.It's most commonly used on client-side servers.. <br />
              4.The node community does not care about JavaScript.

            </div>
            <div className="divider divider-horizontal">OR</div>
            <div className="grid h-48 flex-grow card bg-base-300 rounded-box p-5 place-items-center">
              <h3 className='text-center text-xl'> NodeJs</h3>
              1.It's a bridge, open-source Js runtime environment for executing Js on the server. <br />
              2.It's a JavaScript translator and environment that includes some valuable libraries for JavaScript programming. <br />
              3.It's mainly popular on the server-side. <br />
              4.All node projects represent the JavaScript community.
            </div>
          </div>
        </div>
      </div>

      <div tabIndex={3} className="collapse">
        <div className="collapse-title text-xl font-medium">
          3.What is JWT, and how does it work?
        </div>
        <div className="collapse-content">
          <p>JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.

            It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved.

            The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted. </p>
        </div>
      </div>

      <div tabIndex={4} className="collapse">
        <div className="collapse-title text-xl font-medium">
        How does NodeJS handle multiple requests at the same time?
        </div>
        <div className="collapse-content">
          <p>I understand that Node.js uses a single-thread and an event loop to process requests only processing one at a time (which is non-blocking). But still, how does that work, lets say 10,000 concurrent requests. The event loop will process all the requests? Would not that take too long?

          I can not understand (yet) how it can be faster than a multi-threaded web server. I understand that multi-threaded web server will be more expensive in resources (memory, CPU), but would not it still be faster? I am probably wrong; please explain how this single-thread is faster in lots of requests, and what it typically does (in high level) when servicing lots of requests like 10,000.</p>
        </div>
      </div>

    </div>
  )
}

export default Blogs