// this login function has code for admin access (staff) and user acces (client)

// Define a function to handle the login process
function login(username, password) {
  if (username === 'admin' && password === 'admin123') {
    // This is the admin user, grant access to everything
    return {
      message: 'Login successful as admin',
      access: {
        users: true,
        posts: true,
        settings: true
      }
    };
  } else if (username === 'user' && password === 'user123') {
    // This is a regular user, grant access to limited things
    return {
      message: 'Login successful as user',
      access: {
        users: false,
        posts: true,
        settings: false
      }
    };
  } else {
    // Invalid login credentials
    return {
      message: 'Invalid login credentials',
      access: {
        users: false,
        posts: false,
        settings: false
      }
    };
  }
}

// Example usage:
const adminLogin = login('admin', 'admin123');
console.log(adminLogin.message);
console.log(adminLogin.access.users); // true
console.log(adminLogin.access.posts); // true
console.log(adminLogin.access.settings); // true

const userLogin = login('user', 'user123');
console.log(userLogin.message);
console.log(userLogin.access.users); // false
console.log(userLogin.access.posts); // true
console.log(userLogin.access.settings); // false








// The bluetooth code is for us to use if we develop further than our MVP
// Request Bluetooth device
// navigator.bluetooth.requestDevice({
//   filters: [{
//     services: ['heart_rate']
//   }]
// })
// .then(device => {
//   console.log('Bluetooth device connected:', device.name);

//   // Connect to GATT server
//   return device.gatt.connect();
// })
// .then(server => {
//   console.log('Connected to GATT server');

  // Get service
//   return server.getPrimaryService('heart_rate');
// })
// .then(service => {
//   console.log('Service found:', service.uuid);

  // Get characteristic
//   return service.getCharacteristic('heart_rate_measurement');
// })
// .then(characteristic => {
//   console.log('Characteristic found:', characteristic.uuid);

  // Start notifications
//   characteristic.addEventListener('characteristicvaluechanged', event => {
//     let value = event.target.value;
//     let heartRate = value.getUint8(1);
//     console.log('Heart rate:', heartRate);
//   });

//   return characteristic.startNotifications();
// })
// .catch(error => {
//   console.error(error);
// });
