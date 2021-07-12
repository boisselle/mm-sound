import React from "react"
import Layout from "../components/Layout"

const rates = () => {
  return (
    <>
      <Layout>
        <div className="columnContainer">
          {/* <h1>Rates & Equipment</h1>
          <br />

          <h3>Labor</h3>
          <p>Day Rate $650/10 or $750/12</p>

          <h3>Equipment</h3> */}
          <div className="doubleColumn">
            {/* <div className="menuBox"></div> */}
            <h1>RATES & GEAR</h1>
            <br />

            <h3>Labor</h3>
            <p>Day Rate $650/10 or $750/12</p>

            <h3>Equipment</h3>
            <div className="menuBox">
              <h3>Mixer Recorder</h3>
              {/* <p>x01 - Zaxcom Nomad</p>
              <p>x01 - Sound Devices 633</p>
              <p>x01 - Sound Devices Mix Pre 10 </p> */}
              x01 - Zaxcom Nomad <br />
              x01 - Sound Devices 633 <br />
              x01 - Sound Devices Mix Pre 10
            </div>
            <div className="menuBox">
              <h3>Microphones</h3>
              x02 - Sanken CS-3e's <br />
              x02 - DPA 4017 <br />
              x02 - Sennhesier MKH 50's
            </div>
            <div className="menuBox">
              <h3>Lavaliers</h3>
              x04 - DPA 4071’s (black/white) <br />
              x04 - Sanken Cos11 (black/white) <br />
              x04 - X04 - Countryman (black/white)
            </div>
            <div className="menuBox">
              <h3>Transmitters</h3>
              x04 - Lectrosonics SMWB’s <br />
              x01 - Lectronoics HMa's (plug)
            </div>
            <div className="menuBox">
              <h3>Receivers</h3>
              x02 - Lectrosonics SRc
            </div>
            <div className="menuBox">
              <h3>Timecode & Sync</h3>
              x01 - Denecke (camera sync) <br />
              x01 - Tentacle (camera sync) <br />
              x01 - Denecke TS-C's (TC slates)
            </div>
            <div className="menuBox">
              <h3>Boom Poles & Suspension</h3>
              x01 - Ambient Pole <br />
              x01 - K-tek Pole <br />
              with shock mounts and protection
            </div>
            <div className="menuBox">
              <h3>Client Monitoring (IFB)</h3>
              x01 IFB TX <br />
              x04 IFB RX
            </div>
          </div>
          <div className="doubleColumn">
            <div className="menuBox">
              <h3>Sound bag kit ... $350 / day</h3>
              x01 Bag-based multi-track recorder <br />
              x01 Boom microphone kit <br />
              x02 Wireless lavalier mic kits <br /> <br />
              <h3>Sound Cart Kit ... $850 / day</h3>
              x01 Cart-based multi-track recorder <br />
              x01 Wireless boom mic kit <br />
              x04 Wireless lavalier mic kits <br />
              x02 Timecode slate + x02 Sync box <br />
              x01 IFB TX + x04 IFB RX
            </div>
            <div className="menuBox">
              {/* <h3>À La Carte</h3> */}
              <table>
                <tbody>
                  <th>
                    <h3>À la Carte (ea.)</h3>
                  </th>

                  <tr>
                    <td width="75%">2-ch. Wireless to camera</td>
                    <td width="25%">$150 / day</td>
                  </tr>

                  <tr>
                    <td width="75%">Sync box</td>
                    <td width="25%">$50 / day</td>
                  </tr>

                  <tr>
                    <td width="75%">Timecode slate</td>
                    <td width="25%">$50 / day</td>
                  </tr>

                  <tr>
                    <td width="75%">IFB TX + RX</td>
                    <td width="25%">$50 / day</td>
                  </tr>

                  <tr>
                    <td width="75%">Additional IFB RX</td>
                    <td width="25%">$25 / day</td>
                  </tr>

                  <tr>
                    <td width="75%">Stereo microphone kit</td>
                    <td width="25%">$100 / day</td>
                  </tr>

                  <tr>
                    <td width="75%">Ambisonic microphone kit</td>
                    <td width="25%">$200 / day</td>
                  </tr>

                  <tr>
                    <td width="75%">Wireless boom mic kit</td>
                    <td width="25%">$100 / day</td>
                  </tr>

                  <tr>
                    <td width="75%">Wireless lavalier mic kit</td>
                    <td width="25%">$75 / day</td>
                  </tr>

                  <tr>
                    <td width="75%">Wireless handheld mic kit</td>
                    <td width="25%">$75 / day</td>
                  </tr>

                  <tr>
                    <td width="75%">Wireless scratch track</td>
                    <td width="25%">$50 / day</td>
                  </tr>

                  <tr>
                    <td width="75%">MP3s for transcription</td>
                    <td width="25%">$50 / day</td>
                  </tr>

                  <tr>
                    <td width="75%">Expendables</td>
                    <td width="25%">$10 / day</td>
                  </tr>
                </tbody>
              </table>
            </div>
            Travel job fees: Travel day/Idle day (Labor Rate) ​All Travel
            Expenses to be paid by production. Mileage (IRS Mileage)* Per Diem
          </div>
        </div>
      </Layout>
    </>
  )
}

export default rates
