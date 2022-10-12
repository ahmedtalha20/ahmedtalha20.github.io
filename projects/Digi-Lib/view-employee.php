<?php

session_start();
if (isset($_SESSION["employee-username"])){

// needs to connect to database
require_once "Include/db.php" ;
$currentuser = $_SESSION["employee-username"];
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>List Of Employees</title>
    <link rel="icon" type="image/png" href="library.png" sizes="16x16"/>    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
    <link rel="stylesheet" href="Include/style.css">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous" async>
    </script>
</head>

<body>
    <nav id="main-nav" class="navbar navbar-expand-lg navbar-light fixed-top">
      <div class="container">
        <a class="navbar-brand" href="index.php">Digi Lib</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">            
            <li class="nav-item"><a class="nav-link" href="index.php"><i class="fa fa-fw fa-home"></i> Home</a></li>            
            <li class="nav-item"><a class="nav-link" href="insert-into-database.php"><i class="fa fa-fw fa-plus"></i> Insert</a></li>
            <li class="nav-item"><a class="nav-link" href="view-catalog.php"><i class="fa fa-fw fa-search"></i> Catalog</a></li>
            <li class="nav-item"><a class="nav-link" href="employee-profile.php"><i class="fa fa-fw fa-user"></i> Profile</a></li>
            <li class="nav-item"><a class="nav-link active" href="view-employee.php"><i class="fa fa-fw fa-group"></i> Employees</a></li>
            <li class="nav-item"><a class="nav-link" href="logout.php"><i class="fa fa-fw fa-lock"></i> Log out</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="intro min-height position-relative text-white">
      <div class="home-bg">
        <img class="img-fluid img-cover" src="Images/home-bg.jpg" alt="Library">
      </div>      
      
        <div class="intro-content text-white">
            <div class="container">
                <h2 class="success">
                    <!-- @ - won't show error when there is no id -->
                    <?php echo @$_GET["id"]; ?>
                </h2>

                <div class="row">
                    <div class="col-md-12">
                        <fieldset class="float-md-end">
                            <form class="" action="view-employee.php" method="GET">
                                <input class="search-text-field" type="text" name="search" value="" placeholder="Search name/username">
                                <input class="search-submit btn btn-warning btn-md mr-lg-2"  type="submit" name="searchBtn" value="Search record">
                            </form>
                        </fieldset>
                    </div>                    
                </div>                            
                
                <?php

                if (isset($_GET["searchBtn"])) {
                    global $ConnectingDB;
                    $Search = $_GET["search"];
                    $sql = "SELECT * FROM employee_accounts WHERE (`name` LIKE '%". $Search . "%') OR (`username`= '$Search')";
                    $stmt = $ConnectingDB->prepare($sql);
                    $stmt->execute();

                    while ($DataRows = $stmt->fetch()) {
                        $Id                 = $DataRows["id"];
                        $Name               = $DataRows["name"];
                        $Username           = $DataRows["username"];
                        $Password           = $DataRows["password"];
                        
                    ?>
                         <div class="container database-table d-none d-lg-block">
                            <h2 class="text-center">Search Result</h2>
                            <div class="row database-title">
                                <div class="col-lg-4"><span class="title">Name</span></div>
                                <div class="col-lg-4"><span class="title">Username</span></div>
                                <div class="col-lg-4"><span class="title">Delete</span></div>                                
                            </div>

                            <div class="row database-info">
                                <div class="col-lg-4"><span><?php echo $Name; ?></span></div>
                                <div class="col-lg-4"><span><?php echo $Username; ?></span></div>                                
                                <div class="col-lg-4"><span>
                                    
                                <?php
                                if($currentuser != $Username){
                                ?>
                                <a class="btn btn-warning btn-md mr-lg-2" href= "delete-employee.php?id=<?php echo $Id?>">Delete</a>                                    
                                <?php        
                                } else{
                                ?>
                                <a class="btn btn-warning btn-md mr-lg-2" href= "#">Can't Delete Your Account</a>                                    
                                <?php
                                }                            
                                ?>
                                </span></div>   
                            </div>
                        </div>
                        
                        <div class="container database-table-mobile d-lg-none">
                            <h2 class="text-center">Search Result</h2>                            

                            <div class="row database-info">
                                <div class="col-sm-6"><span class="title">Name</span></div>
                                <div class="col-sm-6"><span><?php echo $Name; ?></span></div>
                                <div class="col-sm-6"><span class="title">Username</span></div>
                                <div class="col-sm-6"><span><?php echo $Username; ?></span></div>                                
                                <div class="col-sm-6"><span class="title">Delete</span></div>                                
                                <div class="col-sm-6"><span>                                    
                                <?php
                                if($currentuser != $Username){
                                ?>
                                <a class="btn btn-warning btn-md mr-lg-2" href= "delete-employee.php?id=<?php echo $Id?>">Delete</a>                                    
                                <?php        
                                } else{
                                ?>
                                <a class="btn btn-warning btn-md mr-lg-2" href= "#">Can't Delete Your Account</a>                                    
                                <?php
                                }                            
                                ?>
                                </span></div>   
                            </div>
                        </div>

                <?php 

                    }

                ?>
                    <div class="row d-lg-none">
                        <div class="col-lg-12 d-flex justify-content-center">
                            <a class="btn btn-warning btn-md mr-lg-2" href="view-employee.php">Search Again</a>
                        </div>
                    </div>
                    <div class="row d-none d-lg-block">
                        <div class="col-lg-12 d-flex justify-content-center search-button">
                            <a class="btn btn-warning btn-md mr-lg-2" href="view-employee.php">Search Again</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright py-4 text-center text-white">
            <div class="container"><span>Copyright &copy; Digi Lib 2022</span></div>
        </div>
                <?php
                }
                    
                ?>

                <?php

                if (!isset($_GET["searchBtn"])) {
                    
                    ?>

                    <div class="container database-table d-none d-lg-block">
                        <h2 class="text-center">List Of Employees</h2>
                        <div class="row database-title">
                            <div class="col-lg-4"><span class="title">Name</span></div>
                            <div class="col-lg-4"><span class="title">Username</span></div>
                            <div class="col-lg-4"><span class="title">Delete</span></div>                                
                        </div>                                                                               
                        
                        <?php
                
                        global $ConnectingDB;

                        $sql = "SELECT * From employee_accounts";
                        $stmt = $ConnectingDB->query($sql);
                        while ($DataRows = $stmt->fetch()) {
                            $Id                 = $DataRows["id"];
                            $Name               = $DataRows["name"];
                            $Username           = $DataRows["username"];

                        ?>

                            <div class="row database-info">
                                <div class="col-lg-4"><span><?php echo $Name; ?></span></div>
                                <div class="col-lg-4"><span><?php echo $Username; ?></span></div>                                
                                <div class="col-lg-4"><span>
                                    
                                <?php
                                if($currentuser != $Username){
                                ?>
                                <a class="btn btn-warning btn-md mr-lg-2" href= "delete-employee.php?id=<?php echo $Id?>">Delete</a>                                    
                                <?php        
                                } else{
                                ?>
                                <a class="btn btn-warning btn-md mr-lg-2" href= "#">Can't Delete Your Account</a>                                    
                                <?php
                                }                            
                                ?>
                                </span></div>   
                                                        
                            </div>         

                    <?php

                        }

                    ?>                    
                    </div>

                    <div class="container database-table-mobile d-lg-none">
                        <h2 class="text-center">List Of Employees</h2>                                                                                                      
                        
                        <?php
                
                        global $ConnectingDB;

                        $sql = "SELECT * From employee_accounts";
                        $stmt = $ConnectingDB->query($sql);
                        while ($DataRows = $stmt->fetch()) {
                            $Id                 = $DataRows["id"];
                            $Name               = $DataRows["name"];
                            $Username           = $DataRows["username"];

                        ?>

                            <div class="row database-info">
                                <div class="col-sm-6"><span class="title">Name</span></div>
                                <div class="col-sm-6"><span><?php echo $Name; ?></span></div>
                                <div class="col-sm-6"><span class="title">Username</span></div>
                                <div class="col-sm-6"><span><?php echo $Username; ?></span></div>                                
                                <div class="col-sm-6"><span class="title">Delete</span></div>        
                                <div class="col-sm-6"><span>
                                    
                                <?php
                                if($currentuser != $Username){
                                ?>
                                <a class="btn btn-warning btn-md mr-lg-2" href= "delete-employee.php?id=<?php echo $Id?>">Delete</a>                                    
                                <?php        
                                } else{
                                ?>
                                <a class="btn btn-warning btn-md mr-lg-2" href= "#">Can't Delete Your Account</a>                                    
                                <?php
                                }                            
                                ?>
                                </span></div>   
                                                        
                            </div>         

                    <?php

                        }

                    ?>                    
                    </div>
            </div>
        </div>
    </div>
    <div class="copyright py-4 text-center text-white">
        <div class="container"><span>Copyright &copy; Digi Lib 2022</span></div>
    </div>
          
       
    </body>
    </html>

<?php

    }
 } else {
    header("Location: index.php");
} 

?>

<!-- EOF -->