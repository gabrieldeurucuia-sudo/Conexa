// User Model
// Handles user data and account types (Normal/Business)

export class User {
  constructor(data) {
    this.id = data.id;
    this.username = data.username;
    this.email = data.email;
    this.password_hash = data.password_hash;
    this.account_type = data.account_type; // 'normal' or 'business'
    this.profile_image = data.profile_image;
    this.bio = data.bio;
    this.created_at = data.created_at;
    this.updated_at = data.updated_at;
  }

  // Check available resources
  getAvailableResources() {
    return this.account_type === 'business' ? 1550 : 1000;
  }

  // Get resource usage percentage
  getResourceUsage(used) {
    const total = this.getAvailableResources();
    return ((used / total) * 100).toFixed(2);
  }
}

export default User;
