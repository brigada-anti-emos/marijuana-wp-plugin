<?php 

namespace BaeWp;

class AuthController {

	public function connect()
	{
		return view('@BaeWp/auth/connect.twig', [
			'title' => 'asd',
			'content' => 'asad'
		]);
	}

	public function info()
	{
		return view('@BaeWp/auth/info.twig', [
			
		]);	
	}
}