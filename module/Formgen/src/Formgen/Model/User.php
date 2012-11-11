<?php

namespace Formgen\Model;

class User
{
    protected $user_id;
    protected $username;
    protected $email;
    protected $password;

    public function exchangeArray($data)
    {
        $this->user_id      = (isset($data['user_id']))     ? $data['user_id']  : null;
        $this->username     = (isset($data['username']))    ? $data['username'] : null;
        $this->email        = (isset($data['email']))       ? $data['email']    : null;
        $this->password     = (isset($data['password']))    ? $data['password'] : null;
    }

}