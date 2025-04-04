const loginAdmin = (req, res) => {
    const { adminId, password } = req.body;
  
    const ADMIN_ID = 'admin123';
    const ADMIN_PASSWORD = 'securepass';
  
    if (adminId === ADMIN_ID && password === ADMIN_PASSWORD) {
      return res.json({
        success: true,
        token: 'fake-jwt-token-12345' // just a placeholder token for frontend to store
      });
    } else {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }
  };
  
  module.exports = { loginAdmin };
  