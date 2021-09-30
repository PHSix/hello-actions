<<<<<<< HEAD
import axios from 'axios';
const fetchURL = async function (token) {
  const ax = axios.create({
    headers: { Authorization: `Bearer ${token}` },
  });
  const res = await ax.get(
    `https://api.github.com/repos/phsix/phsix.github.io/issues`
  );
};

fetchURL(process.argv[2]);
