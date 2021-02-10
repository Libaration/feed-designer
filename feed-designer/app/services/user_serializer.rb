class UserSerializer
    def initialize(user_object)
        @user = user_object
    end
    def toSerializedJson
        @user.to_json(:include => {
            :photos => {:except => [:created_at,:updated_at, :user_id]}
        })
    end
end