function fft(x) {
  let N = x.length;

  if (N <= 1) return x;

  let even = new Array(N / 2);
  let odd = new Array(N / 2);
  for (let i = 0; i < N / 2; i++) {
    even[i] = x[2 * i];
    odd[i] = x[2 * i + 1];
  }

  let q = fft(even);
  let r = fft(odd);

  let y = new Array(N);
  for (let k = 0; k < N / 2; k++) {
    let t = r[k] * Math.exp(-2 * Math.PI * k / N * 1i);
    y[k] = q[k] + t;
    y[k + N / 2] = q[k] - t;
  }

  return y;
}
