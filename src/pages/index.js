import React from "react"
import Layout from "../components/layout"

// const IndexPage = () => {
//   return (
//     <>
//       <Layout>
//         {/* <Seo title="Home" /> */}
//         <main>
//           <p>Hello from index...</p>
//         </main>
//       </Layout>
//     </>
//   )
// }

// export default IndexPage

// export default function Home() {
//   return (
//     <>
//       <Layout>
//         <div className="singleColumn">
//           <main>Now the index page works.</main>
//           <h3>Myriam Boisselle</h3>
//           <h2>Location Sound Mixer & Recordist</h2>
//           <h2>San Francisco, Los Angeles, Miami, and more</h2>
//           <p>(305) 502-5390</p>
//           <p>metamorphsound@gmail.com</p>
//           <p> insert photo element here...</p>
//           <p>
//             Proficient in mixing and recording double system sync sound with
//             Arri, Red, Black Magic, Canon and Sony, & DSLRs.
//           </p>
//         </div>
//       </Layout>
//     </>
//   )
// }

const IndexPage = () => {
  return (
    <>
      <Layout>
        {/* <Seo title="Home" /> */}
        <main className="mainPage">
          <h1>MYRIAM BOISSELLE</h1>
          <h2>LOCATION SOUND MIXER & RECORDIST</h2>
          <p>
            Proficient in mixing and recording double system sync sound ​with
            Arri, Red, Black Magic, Canon and Sony & DSLRs.
          </p>
        </main>
      </Layout>
    </>
  )
}

export default IndexPage
