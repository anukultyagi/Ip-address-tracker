import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

import { useEffect } from 'react';

// Set up the default icon for markers
const DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;




const ChangeMapView = ({ lat, lng }) => {
    const map = useMap();
    useEffect(() => {
        if (lat && lng) {
            map.setView([lat, lng], 16);  // Setting the view to the new lat, lng, and keeping the zoom level 13
        }
    }, [lat, lng, map]);

    return null;
};

const HomeMapContainer = ({ lat, lng }) => {


    const position = [lat, lng];

    return (
        <MapContainer center={position} zoom={16} style={{ height: '500px', width: '100%' }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    Location: {lat}, {lng}
                </Popup>
            </Marker>
            {/* Hook to change map view when lat, lng changes */}
            <ChangeMapView lat={lat} lng={lng} />
        </MapContainer>
    );
};

export default HomeMapContainer;
