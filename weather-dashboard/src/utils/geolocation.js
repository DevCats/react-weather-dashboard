// Class containing the _success, _errors & _options parameters for navigator.geolocation.getCurrentPosition()
export class Geolocation {
    constructor () {
        this.options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };
        this.errors = (_error) => {
            console.error(`ERROR(${_error.code}): ${_error.message}`);
        };
        this.success = (_position) => {
            // Convert to JSON object
            let coords = _position.coords.toJSON();
            if (coords) {
                // Store lat/lon in localStorage & return both values as single string
                localStorage.setItem('latitude', coords.latitude);
                localStorage.setItem('longitude', coords.longitude);
                return `${coords.latitude},${coords.longitude}`;
            }
        };
    }
}

// Function to get device coordinates & feedback issues to client
export const getCoords = () => {
    // Check if client browser supports geolocation
    if (navigator.geolocation) {
        const GeoLoc = new Geolocation();
        // Check client's device permissions for geolocation
        navigator.permissions.query({ name: 'geolocation' })
            .then((result) => {
                switch (result.state) {
                    case 'granted':
                    case 'prompt':
                        navigator.geolocation.getCurrentPosition(GeoLoc.success, GeoLoc.errors, GeoLoc.options);
                        break;
                    case 'denied':
                        console.error('Location permissions have been denied. Please check your settings');
                        break;
                    default:
                        return;
                }
            });
    } else {
        console.log('Geolocation is not supported by this browser.');
    }
}