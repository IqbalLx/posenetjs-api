const posenet = require('@tensorflow-models/posenet');
// Adds the CPU backend to the global backend registry.
require('@tensorflow/tfjs-backend-cpu')

exports.estimateMultiplePosesOnImage = async (image) => {
  const net = await posenet.load();

  // estimate poses
  const poses = await net.estimateMultiplePoses(image, {
        flipHorizontal: false,
        maxDetections: 2,
        scoreThreshold: 0.6,
        nmsRadius: 20});

  return poses;
}