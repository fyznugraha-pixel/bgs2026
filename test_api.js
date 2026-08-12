const body = {
  name: "Test User",
  email: "test_error@example.com",
  city: "Bandung",
  date: "21 Agustus 2026"
};

fetch('http://localhost:3000/api/register', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(body)
})
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err));
