<?php

namespace App\Controller\Security;

use App\Entity\User;
use App\Repository\UserRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class SecurityController extends AbstractController
{
    #[Route(path: '/api/register', name: 'api_register')]
    public function register(UserRepository $userRepository, UserPasswordHasherInterface $passwordHasher): Response
    {
        $newUser = new User();

        $newHashedPassword = $passwordHasher->hashPassword($newUser, 'test');

        $newUser->setEmail("julien@test.com")
            ->setPassword($newHashedPassword);

        $user = $userRepository->add($newUser);

        return $this->json($user);
    }
}
