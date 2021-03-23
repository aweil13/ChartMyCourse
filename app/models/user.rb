class User < ApplicationRecord
        validates_presence_of :username, :password_digest, 
        :session_token, :email, :birthdate, :first_name, :last_name, :gender, :height, :weight
        validates :gender, inclusion: {in: %w(M F)}
        validates :password, length: {minimum: 6, too_short: "%{count} is the minimum characters, password is too short.", allow_nil: true}
        validates_uniqueness_of :username, :session_token, :email
        before_validation :ensure_session_token

        attr_reader :password

        def password=(password)
            self.password_digest = BCrypt::Password.create(password)
            @password= password
        end

        def is_password?(password)
            pobject = BCrypt::Password.new(self.password_digest)
            pobject.is_password?(password)
        end

        def reset_session_token!
            self.session_token = SecureRandom.urlsafe_base64
            save!
            session_token
        end

        def self.find_by_credentials(username, password)
            @user = User.find_by(username: username)
            @user and @user.is_password?(password) ? @user : nil
        end

        private

        def ensure_session_token
            self.session_token ||= SecureRandom.urlsafe_base64
        end

        has_many :courses,
        foreign_key: :creator_id


end
