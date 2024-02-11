using SHFT.Samples;
using Xunit;

namespace SHFT.EntityFrameworkCore.Domains;

[Collection(SHFTTestConsts.CollectionDefinitionName)]
public class EfCoreSampleDomainTests : SampleDomainTests<SHFTEntityFrameworkCoreTestModule>
{

}
