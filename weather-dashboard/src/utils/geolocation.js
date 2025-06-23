
export class Geolocation {
    constructor () {
        this.options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };
        this.errors = (_error) => {
            console.error(`ERROR(${_error.code}): ${_error.message}`); // !!! TODO: Error feedback for user
        };
        this.success = (_position) => {
            let coords = _position.coords.toJSON();
            if (coords) {
                localStorage.setItem('latitude', coords.latitude);
                localStorage.setItem('longitude', coords.longitude);
            }
        };
    }
}

export const getCoords = () => {
    if (navigator.geolocation) {
        const GeoLoc = new Geolocation();
        navigator.permissions.query({ name: 'geolocation' })
            .then((result) => {
                switch (result.state) {
                    case 'granted':
                    case 'prompt':
                        navigator.geolocation.getCurrentPosition(GeoLoc.success, GeoLoc.errors, GeoLoc.options);
                        break;
                    case 'denied':
                        console.error('Location permissions have been denied. Please check your settings'); // !!! TODO: Error feedback for user
                        break;
                    default:
                        return;
                }
            });
    } else {
        console.log('Geolocation is not supported by this browser.'); // !!! TODO: Error feedback for user
    }
}