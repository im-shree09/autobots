from rest_framework.routers import DefaultRouter
# from restapiapp.views import *
from django.urls import path,include
from restapiapp import views
from .views import *
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView, TokenVerifyView

# creating router object
router= DefaultRouter()

# register ViewSet with router
router.register('studentapi',views.StudentViewSet,basename='student')
router.register('team_api',views.TeamViewSet,basename='team')
router.register('team_member_api',views.TeamMemberViewSet,basename='team_member')
router.register('project_api',views.ProjectViewSet,basename='project')
router.register(r'my_project_api',views.MyProjectViewSet,basename='myproject')
router.register(r'my_team_api',views.MyTeamViewSet,basename='myteammember')
router.register(r'my_team_member_api',views.MyTeamMemberViewSet,basename='myteam')
# ===================================================================================================
# router.register(r'loginn' , views.login , basename = 'loginn')
# router.register('MyProjectTest' , views.MyProjectViewsetTest , basename='myProjectTest')
# router.register('my_project_api',views.MyProjectViewSet,basename='myteam')
# router.register('my_team_api',views.MyTeamViewSet,basename='myproject')
# router.register('my_team_member_api',views.MyTeamMemberViewSet,basename='myteammember')


urlpatterns = [
    path("" , include(router.urls) , ),
    # =================================================================================================
    path('registerr/',RegisterUserAPIView.as_view()),
    path("loginn/" , views.login ) ,
    path("gettoken/" , TokenObtainPairView.as_view(), name='token_obtain_pair') ,
    path("refreshtoken/" , TokenRefreshView.as_view(), name='token_refresh') ,
    path("verifytoken/" , TokenVerifyView.as_view(), name='token_verify') ,


]

