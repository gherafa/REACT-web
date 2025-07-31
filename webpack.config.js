module.exports = {
  // ... other webpack configurations
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Apply babel-loader to .js and .jsx files
        exclude: /node_modules/, // Exclude node_modules for faster builds
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
       {
        test: /\.html$/,
        use: 'html-loader', // Use html-loader for HTML files
      }
    ]
  }
};