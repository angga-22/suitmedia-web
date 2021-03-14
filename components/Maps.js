import { GoogleMap, withScriptjs, Marker, InfoWindow } from 'react-google-maps';
import withGoogleMap from 'react-google-maps/lib/withGoogleMap';
import { useState } from 'react';
import styles from '../styles/Maps.module.scss';
// -6.275938710910049, 106.82450654908467 suitmedia jakarta
//-6.8901986133046025, 107.61688451659998 suitmedia bandung
//-7.763035931786053, 110.36818141167437 suitmedia yogyakarta
//1.2983580771829317, 103.84412328280634 suitmedia singapore
function Map() {
    const [bandung, setBandung] = useState(false)
    const [jakarta, setJakarta] = useState(false)
    const [jogja, setJogja] = useState(false)
    const [singapore, setSingapore] = useState(false)
    return (
        <GoogleMap
            defaultZoom={7}
            defaultCenter={{ lat: -6.175110, lng: 106.865036 }}
        >
            <Marker
                position={{ lat: -6.8901986133046025, lng: 107.61688451659998 }}
                onClick={() => setBandung(!bandung)}
                icon={{
                    url: "/loc-logo.png",
                    scaledSize: new window.google.maps.Size(50, 50)
                }}
            />
            <Marker
                position={{ lat: -6.275938710910049, lng: 106.82450654908467 }}
                onClick={() => setJakarta(!jakarta)}
                icon={{
                    url: "/loc-logo.png",
                    scaledSize: new window.google.maps.Size(50, 50)
                }}
            />
            <Marker
                position={{ lat: -7.763035931786053, lng: 110.36818141167437 }}
                onClick={() => setJogja(!jogja)}
                icon={{
                    url: "/loc-logo.png",
                    scaledSize: new window.google.maps.Size(50, 50)
                }}
            />
            <Marker
                position={{ lat: 1.2983580771829317, lng: 103.84412328280634 }}
                onClick={() => setSingapore(!singapore)}
                icon={{
                    url: "/loc-logo.png",
                    scaledSize: new window.google.maps.Size(50, 50)
                }}
            />
            {bandung && <InfoWindow
                position={{ lat: -6.8901986133046025, lng: 107.61688451659998 }}
                onCloseClick={() => setBandung(null)}>
                <div>
                    <h2>Bandung</h2>
                    <p>Jalan Sekeloa Jalan Dipati Ukur, Lebak Gede, Bandung City, West Java</p>
                </div>
            </InfoWindow>}
            {jakarta && <InfoWindow
                position={{ lat: -6.275938710910049, lng: 106.82450654908467 }}
                onCloseClick={() => setJakarta(null)}>
                <div>
                    <h2>Jakarta</h2>
                    <p>Jalan Pejaten Barat II, RT.2/RW.8, West Pejaten, South Jakarta City</p>
                </div>
            </InfoWindow>}
            {jogja && <InfoWindow
                position={{ lat: -7.763035931786053, lng: 110.36818141167437 }}
                onCloseClick={() => setJogja(null)}>
                <div>
                    <h2>Jogja</h2>
                    <p>Jalan Jati Pratama, RT.17/RW.41, Kutu Dukuh, Sinduadi, Sleman Regency</p>
                </div>
            </InfoWindow>}
            {singapore && <InfoWindow
                position={{ lat: 1.2983580771829317, lng: 103.84412328280634 }}
                onCloseClick={() => setSingapore(null)}>
                <div>
                    <h2>Singapore</h2>
                    <p>Clemenceau Avenue</p>
                </div>

            </InfoWindow>}
        </GoogleMap>
    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

export default function Maps() {
    return (
        <div className={styles.container}>
            <WrappedMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDJDmYrYMRZc3Y3B_T6DOoMnrRmHfkUitE`}
                loadingElement={<div style={{ height: "100%" }} />}
                containerElement={<div style={{ height: "100%" }} />}
                mapElement={<div style={{ height: "100%" }} />}
            />
        </div>
    )
}
