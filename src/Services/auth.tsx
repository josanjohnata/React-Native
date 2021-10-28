export default function Login() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: 'skljdfgdfgjsdhfglshdgsdjlgasjlçdfghlas',
        user: {
          name: 'Josan',
          email: 'josanjohnata@gmail.com'
        }
      })
    }, 2000);
  });
}
