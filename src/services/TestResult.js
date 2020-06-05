import * as tf from "@tensorflow/tfjs";

function makePattern(symptoms){

}

function TestResult(testPattern) {
  // Contants Init obtained from training (EXTERNAL)
  // W1 = 15x2
  const W1 = tf.tensor2d(
    [
      0.7199,
      0.1517,
      0.714,
      0.0517,
      0.561,
      0.3082,
      0.1308,
      0.4106,
      0.5636,
      0.0523,
      0.298,
      0.9939,
      0.164,
      0.3601,
      0.0962,
      0.1837,
      0.893,
      0.0614,
      -0.0708,
      0.1658,
      0.0379,
      -0.1572,
      0.0743,
      0.5189,
      0.4442,
      0.764,
      -0.0306,
      0.6016,
      0.8909,
      0.0789,
    ],
    [15, 2]
  );
  // W2 = 1x15
  const W2 = tf.tensor2d(
    [
      0.2191,
      0.2683,
      -0.2406,
      0.199,
      0.0936,
      -0.1404,
      -0.4062,
      0.3374,
      -0.1802,
      0.2451,
      0.4255,
      -0.3934,
      -0.4024,
      0.0613,
      -0.0334,
    ],
    [1, 15]
  );
  // b1 = 15x1
  const b1 = tf.tensor2d(
    [
      0.0584,
      0.7561,
      0.9062,
      0.5094,
      0.0889,
      0.8241,
      0.3533,
      0.2456,
      0.7458,
      -0.0406,
      -0.0269,
      0.6781,
      0.6091,
      0.5094,
      0.7232,
    ],
    [15, 1]
  );
  // b2 = 1x1
  const b2 = tf.scalar(0.1963);
  // Positive Test sample = 2x15
  let t1 = tf.tensor2d(
    [
      6,
      6,
      6,
      5,
      0,
      5,
      4,
      4,
      3,
      3,
      2,
      2,
      1,
      1,
      0,
      4,
      4,
      5,
      2,
      0,
      4,
      2,
      5,
      2,
      4,
      2,
      3,
      2,
      1,
      0,
    ],
    [2, 15]
  );
  // Negative Test sample = 2x15
  const t2 = tf.tensor2d(
    [
      0,
      0,
      6,
      0,
      5,
      5,
      4,
      4,
      3,
      3,
      2,
      2,
      1,
      1,
      1,
      0,
      0,
      4,
      0,
      1,
      4,
      2,
      3,
      2,
      5,
      5,
      5,
      1,
      5,
      1,
    ],
    [2, 15]
  );

//   TESTING ALGORITMH
  const test = function (testPattern) {
    let a1 = tf.fill([15, 1], 1);
    let a2 = tf.tensor1d([0]);

    for (let i = 0; i < 15; i++) {
      let indices = tf.tensor1d([i], "int32");

      a1 = tf.matMul(W1, testPattern.gather(indices, 1));
      a1.add(b1);
      a1.logSigmoid();
    }
    a2 = tf.add(tf.matMul(W2, a1), b2);
    return a2.asScalar().dataSync()[0];
  };

  console.log(testPattern);
  return test(t2);
}

export default TestResult;
