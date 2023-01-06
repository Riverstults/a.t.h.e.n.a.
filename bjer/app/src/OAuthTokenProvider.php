<?php


interface OAuthTokenProvider
{
    @return string
     
    public function getOauth64();
}
