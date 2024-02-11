using SHFT.Samples;
using Xunit;

namespace SHFT.EntityFrameworkCore.Applications;

[Collection(SHFTTestConsts.CollectionDefinitionName)]
public class EfCoreSampleAppServiceTests : SampleAppServiceTests<SHFTEntityFrameworkCoreTestModule>
{

}
