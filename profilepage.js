// JavaScript to handle image upload and display
const loadFile = (event) => {
    const image = document.getElementById('profile-picture');
    image.src = URL.createObjectURL(event.target.files[0]);
    image.onload = () => {
      URL.revokeObjectURL(image.src); // free memory
    };
  };
  