<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UsersFixtures extends Fixture
{
    private UserPasswordHasherInterface $hasher;

    public function __construct(UserPasswordHasherInterface $hasher)
    {
        $this->hasher = $hasher;
    }

    public function load(ObjectManager $objectManager): void
    {
        $users = ['admin', 'user'];

        foreach ($users as $user) {
            $userEntity = new User();
            $hashedPassword = $this->hasher->hashPassword($userEntity, 'test');

            $userEntity->setEmail($user . '@test.com')
                ->setPassword($hashedPassword)
                ->setRoles(['ROLE_' . strtoupper($user)]);

            $objectManager->persist($userEntity);
        }

        $objectManager->flush();
    }
}
