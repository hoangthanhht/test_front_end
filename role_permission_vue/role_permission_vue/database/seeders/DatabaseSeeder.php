<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Role;
use App\Models\User;
use App\Models\Permission;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \DB::table('admins')->insert([
        //     [
        //         'name' => 'Admin',
        //         'email' => 'admin@gmail.com',
        //         'password' => bcrypt('admin123'),
        //     ]
        // ]);
        $dev_role = new Role();
        $dev_role->slug = 'developer';
        $dev_role->name = 'Front-end Developer';
        $dev_role->save();

        $manager_role = new Role();
        $manager_role->slug = 'manager';
        $manager_role->name = 'Assistant Manager';
        $manager_role->save();

        $createTasks = new Permission();
        $createTasks->slug = 'create-tasks';
        $createTasks->name = 'Create Tasks';
        $createTasks->save();

        $deleteTasks = new Permission();
        $deleteTasks->slug = 'delete-tasks';
        $deleteTasks->name = 'Delete Tasks';
        $deleteTasks->save();

        $viewUsers = new Permission();
        $viewUsers->slug = 'view-users';
        $viewUsers->name = 'View Users';
        $viewUsers->save();



        $dev_role = Role::where('slug','developer')->first();
        $manager_role = Role::where('slug', 'manager')->first();
        $dev_create_perm = Permission::where('slug','create-tasks')->first();
        $dev_delete_perm = Permission::where('slug','delete-tasks')->first();
        $manager_perm = Permission::where('slug','view-users')->first();

        $developer_create = new User();
        $developer_create->name = 'I am developer - Create';
        $developer_create->email = 'dev_create@test.com';
        $developer_create->password = bcrypt('secret');
        $developer_create->save();
        $developer_create->roles()->attach($dev_role);
        $developer_create->permissions()->attach($dev_create_perm);

        $developer_delete = new User();
        $developer_delete->name = 'I am developer - Delete';
        $developer_delete->email = 'dev_delete@test.com';
        $developer_delete->password = bcrypt('secret');
        $developer_delete->save();
        $developer_delete->roles()->attach($dev_role);
        $developer_delete->permissions()->attach($dev_delete_perm);

        $developer_full = new User();
        $developer_full->name = 'I am developer - Full';
        $developer_full->email = 'dev_full@test.com';
        $developer_full->password = bcrypt('secret');
        $developer_full->save();
        $developer_full->roles()->attach($dev_role);
        $developer_full->permissions()->attach($dev_create_perm);
        $developer_full->permissions()->attach($dev_delete_perm);

        $manager = new User();
        $manager->name = 'I am manager';
        $manager->email = 'manager@test.com';
        $manager->password = bcrypt('secret');
        $manager->save();
        $manager->roles()->attach($manager_role);
        $manager->permissions()->attach($manager_perm);

        $manager1 = new User();
        $manager1->name = 'I am manager1';
        $manager1->email = 'manager1@test.com';
        $manager1->password = bcrypt('secret');
        $manager1->save();
        $manager1->roles()->attach($manager_role);
        // \DB::table('users')->insert([
        //     [
        //         'name' => 'User',
        //         'email' => 'user@gmail.com',
        //         'password' => bcrypt('admin123'),
        //     ]
        // ]);
    }
}
